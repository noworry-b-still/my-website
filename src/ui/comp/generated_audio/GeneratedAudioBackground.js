import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as Tone from 'tone';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';
import './GeneratedAudioBackground.css';

const GeneratedAudioBackground = ({ onVisibilityChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showControls, setShowControls] = useState(false);
  const [isCompact, setIsCompact] = useState(false); // Start expanded per your mockup
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const audioSetupRef = useRef(null);
  const isInitializedRef = useRef(false);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);

  // Memoize handlers to prevent re-creation on every render
  const handleMouseEnter = useCallback(() => {
    setIsCompact(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsCompact(true);
  }, []);

  // Notify parent component about visibility - with stable callback
  useEffect(() => {
    if (onVisibilityChange && typeof onVisibilityChange === 'function') {
      onVisibilityChange(showControls);
    }
  }, [showControls, onVisibilityChange]);

  // Setup audio engine on component mount
  useEffect(() => {
    // Only initialize after user interaction
    const handleFirstInteraction = () => {
      setShowControls(true);
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      // Cleanup
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      // Properly dispose audio resources
      if (audioSetupRef.current) {
        const { cleanup } = audioSetupRef.current;
        if (cleanup && typeof cleanup === 'function') {
          cleanup();
        }
      }
    };
  }, []); // Empty dependency array ensures this only runs on mount/unmount

  // Create smooth music similar to Hanumankind's "Big Dawgs"
  const createSmoothMusic = async () => {
    // Skip if already initialized
    if (isInitializedRef.current) {
      // Just resume the existing context
      if (Tone.context.state !== "running") {
        await Tone.start();
      }
      Tone.Transport.start();
      return audioSetupRef.current;
    }

    // Start with a fresh context if needed
    if (Tone.context.state === "closed") {
      // Create a new context
      Tone.context = new Tone.Context();
    }

    await Tone.start();

    // Master volume
    Tone.Destination.volume.value = Tone.gainToDb(volume);

    // Set up analyzer for visualization
    const analyser = new Tone.Analyser("waveform", 256);
    Tone.Destination.connect(analyser);
    analyserRef.current = analyser;
    dataArrayRef.current = new Float32Array(analyser.size);

    // Create effects chain
    const mainReverb = new Tone.Reverb({
      decay: 4,
      wet: 0.35
    }).toDestination();

    const mainDelay = new Tone.PingPongDelay({
      delayTime: "8n",
      feedback: 0.25,
      wet: 0.25
    }).connect(mainReverb);

    // Create a limiter to prevent clipping
    const limiter = new Tone.Limiter(-1).connect(mainDelay);

    // ==================
    // BASS SECTION - Deeper, smoother bass like "Big Dawgs"
    // ==================
    const bassSynth = new Tone.MonoSynth({
      oscillator: {
        type: "sine8"
      },
      envelope: {
        attack: 0.08,
        decay: 0.3,
        sustain: 0.9,
        release: 1.5
      },
      filterEnvelope: {
        attack: 0.3,
        decay: 0.5,
        sustain: 0.7,
        release: 1.5,
        baseFrequency: 50,
        octaves: 2.5
      }
    }).connect(limiter);

    bassSynth.volume.value = -6;

    // Add subtle vibrato to bass
    const bassLFO = new Tone.LFO({
      frequency: 0.3,
      min: -5,
      max: 5
    }).start();

    bassLFO.connect(bassSynth.detune);

    // ==================
    // DRUMS - Hip-hop style like "Big Dawgs"
    // ==================
    // Kicks - more boom
    const kick = new Tone.MembraneSynth({
      pitchDecay: 0.05,
      octaves: 6,
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 0.001,
        decay: 0.8,
        sustain: 0.01,
        release: 1.6,
        attackCurve: "exponential"
      }
    }).connect(limiter);
    kick.volume.value = -4;

    // Snare - trap style
    const snare = new Tone.NoiseSynth({
      volume: -10,
      noise: {
        type: "white",
        playbackRate: 3,
      },
      envelope: {
        attack: 0.001,
        decay: 0.2,
        sustain: 0.02,
        release: 0.6
      }
    }).connect(limiter);

    // Hihat
    const hihat = new Tone.NoiseSynth({
      volume: -18,
      noise: {
        type: "white",
      },
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0.01,
        release: 0.07
      },
      filterEnvelope: {
        attack: 0.001,
        decay: 0.02,
        sustain: 0.01,
        release: 0.02,
        baseFrequency: 6000,
        octaves: -2
      }
    }).connect(limiter);

    // ==================
    // MELODIC ELEMENTS
    // ==================
    // Smooth pad synth
    const padSynth = new Tone.PolySynth(Tone.AMSynth, {
      harmonicity: 1.5,
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 2,
        decay: 0.5,
        sustain: 0.8,
        release: 4
      },
      modulation: {
        type: "triangle"
      },
      modulationEnvelope: {
        attack: 0.5,
        decay: 0,
        sustain: 1,
        release: 4
      }
    }).connect(mainReverb);
    padSynth.volume.value = -14;

    // Lead melody synth - for hook elements
    const leadSynth = new Tone.Synth({
      oscillator: {
        type: "triangle8"
      },
      envelope: {
        attack: 0.02,
        decay: 0.1,
        sustain: 0.3,
        release: 0.9
      }
    }).connect(mainDelay);
    leadSynth.volume.value = -16;

    // ==================
    // SEQUENCING - Hip-hop trap style
    // ==================
    // Slower trap tempo
    Tone.Transport.bpm.value = 75;

    // Bass pattern - deeper and smoother
    const bassNotes = ["F1", "F1", "F1", "F1", "A#1", "A#1", "A#1", "A#1", "D#1", "D#1", "C1", "C1"];
    let bassIndex = 0;

    const bassPattern = new Tone.Loop(time => {
      const note = bassNotes[bassIndex % bassNotes.length];
      bassSynth.triggerAttackRelease(note, "8n", time);
      bassIndex++;
    }, "4n").start(0);

    // Kick pattern - typical trap beat
    const kickPattern = new Tone.Sequence((time, trigger) => {
      if (trigger === 1) {
        kick.triggerAttackRelease("C1", "8n", time);
      }
    }, [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0], "16n").start(0);

    // Snare pattern - trap style
    const snarePattern = new Tone.Sequence((time, trigger) => {
      if (trigger === 1) {
        snare.triggerAttackRelease("16n", time);
      }
    }, [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], "16n").start(0);

    // Hihat pattern - trap style with rolls
    const hihatPattern = new Tone.Sequence((time, prob) => {
      if (Math.random() < prob) {
        hihat.triggerAttackRelease("32n", time, Math.random() * 0.5 + 0.5);
      }
    }, [0.9, 0.6, 0.9, 0.6, 0.9, 0.6, 0.9, 0.6, 0.9, 0.6, 0.9, 0.6, 0.9, 0.6, 0.9, 0.6], "16n").start("16n");

    // Pad chords - emotional trap style
    const chords = [
      ["F3", "A#3", "C4", "F4"],
      ["F3", "A#3", "C4", "F4"],
      ["D#3", "G3", "A#3", "D4"],
      ["C3", "F3", "G3", "C4"]
    ];

    const padPattern = new Tone.Sequence((time, chord) => {
      padSynth.triggerAttackRelease(chord, "2m", time);
    }, chords, "1m").start(0);

    // Lead hook - sparse, emotional melody
    const leadNotes = ["F4", null, "A#4", null, "C5", null, "A#4", null, "F4", null, null, null, "D#4", null, "F4", null];

    const leadPattern = new Tone.Sequence((time, note) => {
      if (note !== null) {
        leadSynth.triggerAttackRelease(note, "8n", time);
      }
    }, leadNotes, "8n").start("2m");

    // Start playback
    Tone.Transport.start();

    // Mark as initialized
    isInitializedRef.current = true;

    // Create cleanup function
    const cleanup = () => {
      bassPattern.dispose();
      kickPattern.dispose();
      snarePattern.dispose();
      hihatPattern.dispose();
      padPattern.dispose();
      leadPattern.dispose();

      bassSynth.dispose();
      bassLFO.dispose();
      kick.dispose();
      snare.dispose();
      hihat.dispose();
      padSynth.dispose();
      leadSynth.dispose();

      mainReverb.dispose();
      mainDelay.dispose();
      limiter.dispose();
      analyser.dispose();

      Tone.Transport.stop();
    };

    // Store references for later use
    const setupData = {
      cleanup,
      bassSynth,
      padSynth,
      leadSynth,
      kick,
      snare,
      hihat
    };

    audioSetupRef.current = setupData;
    return setupData;
  };

  // Toggle play/pause
  const togglePlay = async () => {
    try {
      if (isPlaying) {
        // Just pause instead of closing the context
        Tone.Transport.pause();
        setIsPlaying(false);

        // Stop visualization
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      } else {
        // Start or resume
        await createSmoothMusic();
        setIsPlaying(true);

        // Start visualization if canvas exists
        if (canvasRef.current) {
          visualize();
        }
      }
    } catch (error) {
      console.error("Audio error:", error);
      // If we encounter an error, try to reset the system
      isInitializedRef.current = false;
      if (audioSetupRef.current?.cleanup) {
        audioSetupRef.current.cleanup();
      }
    }
  };

  // Handle volume change
  const handleVolumeChange = useCallback((e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    // Update Tone.js master volume
    if (Tone.Destination) {
      Tone.Destination.volume.value = Tone.gainToDb(newVolume);
    }
  }, []);

  // Enhanced audio visualization function with simplified style to match your mockup
  const visualize = () => {
    if (!canvasRef.current || !analyserRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth || 150;
    canvas.height = canvas.offsetHeight || 30;

    const draw = () => {
      if (!isPlaying) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      // Get waveform data
      analyserRef.current.getValue(dataArrayRef.current);

      // Clear canvas with white background to match mockup
      ctx.fillStyle = '#f8f8f8';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw waveform - simplified for cleaner look
      ctx.beginPath();
      const sliceWidth = canvas.width / dataArrayRef.current.length;
      let x = 0;

      for (let i = 0; i < dataArrayRef.current.length; i++) {
        const v = dataArrayRef.current[i] * 0.5 + 0.5; // Convert -1:1 to 0:1
        const y = v * canvas.height;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      // Style for waveform - using purple to match your mockup
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(125, 85, 200, 0.6)';
      ctx.stroke();

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();
  };

  return (
    <div className="smooth-audio-background">
      {/* Audio Controls */}
      {showControls && (
        <div
          className={`smooth-audio-controls ${isCompact ? 'compact' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="smooth-audio-toggle"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>

          <div className="smooth-volume-controls">
            <div className="audio-label">SMOOTH TRAP</div>
            <div className="smooth-audio-visualizer-container">
              <canvas ref={canvasRef} className="smooth-audio-visualizer" />
            </div>

            <div className="volume-control-container">
              <VolumeX size={14} className="volume-icon" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="smooth-volume-slider"
                aria-label="Volume control"
              />
              <Volume2 size={14} className="volume-icon" />

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratedAudioBackground;
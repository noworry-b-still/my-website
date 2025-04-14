import React, { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';
import './GeneratedAudioBackground.css';

const GeneratedAudioBackground = ({ onVisibilityChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [showControls, setShowControls] = useState(false);
  const [isCompact, setIsCompact] = useState(true);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const audioSetupRef = useRef(null);
  const isInitializedRef = useRef(false);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);

  // Notify parent component about visibility
  useEffect(() => {
    if (onVisibilityChange && typeof onVisibilityChange === 'function') {
      onVisibilityChange(showControls);
    }
  }, [showControls, onVisibilityChange]);

  // Setup audio engine on component mount
  useEffect(() => {
    // Only initialize after user interaction
    const handleFirstInteraction = async () => {
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
  }, []);

  // Create cool audio background
  const createCoolAudio = async () => {
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
    const analyser = new Tone.Analyser("waveform", 128);
    Tone.Destination.connect(analyser);
    analyserRef.current = analyser;
    dataArrayRef.current = new Float32Array(analyser.size);

    // Create effects chain
    const mainReverb = new Tone.Reverb({
      decay: 5,
      wet: 0.3
    }).toDestination();

    const mainDelay = new Tone.FeedbackDelay({
      delayTime: "8n.",
      feedback: 0.2,
      wet: 0.2
    }).connect(mainReverb);

    const crushEffect = new Tone.BitCrusher({
      bits: 8,
      wet: 0.05 // Very subtle bit reduction
    }).connect(mainDelay);

    // Create a limiter to prevent clipping
    const limiter = new Tone.Limiter(-3).connect(crushEffect);

    // ==================
    // BASS SECTION
    // ==================

    // Deep bass with LFO modulation
    const bassSynth = new Tone.MonoSynth({
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 0.1,
        decay: 0.3,
        sustain: 1,
        release: 2
      },
      filterEnvelope: {
        attack: 0.5,
        decay: 0.5,
        sustain: 0.7,
        release: 2,
        baseFrequency: 80,
        octaves: 2
      }
    }).connect(limiter);

    bassSynth.volume.value = -8;

    // Add subtle vibrato to bass
    const bassLFO = new Tone.LFO({
      frequency: 0.5,
      min: -10,
      max: 10
    }).start();

    bassLFO.connect(bassSynth.detune);

    // ==================
    // PERCUSSIVE ELEMENTS
    // ==================

    // Kicks
    const kick = new Tone.MembraneSynth({
      pitchDecay: 0.05,
      octaves: 5,
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 0.001,
        decay: 0.4,
        sustain: 0.01,
        release: 1.4,
        attackCurve: "exponential"
      }
    }).connect(limiter);
    kick.volume.value = -6;

    // Hihat
    const hihat = new Tone.NoiseSynth({
      volume: -15,
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0.01,
        release: 0.05
      },
      filterEnvelope: {
        attack: 0.001,
        decay: 0.02,
        sustain: 0.01,
        release: 0.02,
        baseFrequency: 4000,
        octaves: -2
      }
    }).connect(limiter);

    // ==================
    // AMBIENT ELEMENTS
    // ==================

    // Ethereal pad synth
    const padSynth = new Tone.PolySynth(Tone.AMSynth, {
      harmonicity: 2,
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 1.5,
        decay: 0.5,
        sustain: 0.8,
        release: 5
      },
      modulation: {
        type: "square"
      },
      modulationEnvelope: {
        attack: 0.5,
        decay: 0,
        sustain: 1,
        release: 5
      }
    }).connect(mainReverb);
    padSynth.volume.value = -12;

    // Arpeggiated synth for tech feeling
    const arpSynth = new Tone.Synth({
      oscillator: {
        type: "triangle8"
      },
      envelope: {
        attack: 0.01,
        decay: 0.2,
        sustain: 0.2,
        release: 0.2
      }
    }).connect(mainDelay);
    arpSynth.volume.value = -18;

    // Glitch effects/stabs
    const glitchSynth = new Tone.MonoSynth({
      oscillator: {
        type: "square4"
      },
      envelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.1,
        release: 0.1
      },
      filter: {
        Q: 8,
        type: "lowpass",
        rolloff: -24
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.5,
        release: 0.5,
        baseFrequency: 2000,
        octaves: -2
      }
    }).connect(crushEffect);
    glitchSynth.volume.value = -16;

    // ==================
    // SEQUENCING
    // ==================

    // Bass pattern - simple but driving
    const bassPattern = new Tone.Sequence((time, note) => {
      if (note !== null) {
        bassSynth.triggerAttackRelease(note, "4n", time);
      }
    }, ["A1", null, null, "A1", null, "C2", null, "G1"], "8n").start(0);

    // Kick pattern
    const kickPattern = new Tone.Sequence((time, trigger) => {
      if (trigger === 1) {
        kick.triggerAttackRelease("C1", "8n", time);
      }
    }, [1, 0, 0, 1, 0, 0, 1, 0], "8n").start(0);

    // Hihat pattern
    const hihatPattern = new Tone.Sequence((time, prob) => {
      // Random hi-hats with varying probability
      if (Math.random() < prob) {
        hihat.triggerAttackRelease("16n", time);
      }
    }, [0.9, 0.5, 0.9, 0.5, 0.9, 0.5, 0.9, 0.5], "16n").start("8n");

    // Pad chords
    const chords = [
      ["A3", "E4", "A4"],
      ["G3", "D4", "G4"],
      ["F3", "C4", "F4"],
      ["G3", "D4", "G4"]
    ];

    const padPattern = new Tone.Sequence((time, chord) => {
      padSynth.triggerAttackRelease(chord, "2m", time);
    }, chords, "1m").start(0);

    // Arpeggiator
    const arpNotes = ["A4", "C5", "E5", "G5", "A5", "G5", "E5", "C5"];
    const arpPattern = new Tone.Sequence((time, note) => {
      // Only play arpeggios occasionally
      if (Math.random() < 0.7) {
        arpSynth.triggerAttackRelease(note, "16n", time);
      }
    }, arpNotes, "16n").start("8n");

    // Glitch effects - random and unpredictable
    const glitchSeq = new Tone.Loop(time => {
      // Only trigger glitch occasionally
      if (Math.random() < 0.1) {
        const glitchNote = ["C5", "D#5", "G5"][Math.floor(Math.random() * 3)];
        glitchSynth.triggerAttackRelease(glitchNote, "32n", time);
      }
    }, "8n").start(0);

    // Set the BPM
    Tone.Transport.bpm.value = 85;

    // Start playback
    Tone.Transport.start();

    // Mark as initialized
    isInitializedRef.current = true;

    // Create cleanup function
    const cleanup = () => {
      bassPattern.dispose();
      kickPattern.dispose();
      hihatPattern.dispose();
      padPattern.dispose();
      arpPattern.dispose();
      glitchSeq.dispose();

      bassSynth.dispose();
      bassLFO.dispose();
      kick.dispose();
      hihat.dispose();
      padSynth.dispose();
      arpSynth.dispose();
      glitchSynth.dispose();

      mainReverb.dispose();
      mainDelay.dispose();
      crushEffect.dispose();
      limiter.dispose();
      analyser.dispose();

      Tone.Transport.stop();
    };

    // Store references for later use
    const setupData = {
      cleanup,
      bassSynth,
      padSynth,
      arpSynth,
      glitchSynth,
      kick,
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
        await createCoolAudio();
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
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    // Update Tone.js master volume
    if (Tone.Destination) {
      Tone.Destination.volume.value = Tone.gainToDb(newVolume);
    }
  };

  // Toggle compact mode
  const handleMouseEnter = () => {
    setIsCompact(false);
  };

  const handleMouseLeave = () => {
    setIsCompact(true);
  };

  // Audio visualization function
  const visualize = () => {
    if (!canvasRef.current || !analyserRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = 150;
    canvas.height = 30;

    const draw = () => {
      if (!isPlaying) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      // Get waveform data
      analyserRef.current.getValue(dataArrayRef.current);

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw visualization
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

      // Style for waveform
      ctx.lineWidth = 2;
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, 'rgba(90, 45, 130, 0.8)');
      gradient.addColorStop(0.5, 'rgba(140, 65, 190, 0.8)');
      gradient.addColorStop(1, 'rgba(90, 45, 130, 0.8)');
      ctx.strokeStyle = gradient;
      ctx.stroke();

      // Add glow effect
      ctx.save();
      ctx.filter = 'blur(4px)';
      ctx.strokeStyle = 'rgba(140, 65, 190, 0.4)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();
  };

  return (
    <div className="cool-audio-background">
      {/* Audio Controls */}
      {showControls && (
        <div
          className={`cool-audio-controls ${isCompact ? 'compact' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="cool-audio-toggle"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>

          <div className="cool-volume-controls">
            <div className="audio-label">Tech Beat</div>
            <canvas ref={canvasRef} className="cool-audio-visualizer" />

            <div className="volume-control-container">
              <VolumeX size={14} className="volume-icon" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="cool-volume-slider"
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
import React, { useState, useEffect } from "react";
import "./Profile.css";

function Profile() {
  const [terminalText, setTerminalText] = useState(""); // For the text shown on the terminal
  const [showIntro, setShowIntro] = useState(false); // Control when to show the intro command
  const [showCurrentWork, setShowCurrentWork] = useState(false); // Control when to show the current_work command
  const [showCurrentStudy, setShowCurrentStudy] = useState(false); // Control when to show the current_study command
  const [showHireMe, setShowHireMe] = useState(false); // Control when to show the hire_me command
  const [showLanguagesAdmired, setShowLanguagesAdmired] = useState(false); // Control when to show the languages_admired command
  const [cursorVisible, setCursorVisible] = useState(true); // Handle blinking cursor

  useEffect(() => {
    let timer: any;

    // Simulate terminal typing for the first command 'who'
    const whoCommand = "> who_am_i";
    const whoOutput = "\nI am Dinesh Pandikona\n\n";
    let currentText = "";
    let index = 0;

    const typeWhoCommand = () => {
      if (index < whoCommand.length) {
        currentText += whoCommand[index];
        setTerminalText(currentText);
        index++;
        timer = setTimeout(typeWhoCommand, 100); // Type each character every 100ms
      } else {
        // After command finishes, show the output instantly and proceed to 'intro'
        setTimeout(() => {
          currentText += whoOutput;
          setTerminalText(currentText);
          setTimeout(() => {
            setShowIntro(true); // Trigger the 'intro' command
          }, 1000);
        }, 500); // Delay before showing the output
      }
    };

    typeWhoCommand();

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showIntro) {
      let introIndex = 0;
      const introCommand = "> get my_intro";
      const introOutput =
        "\nI am a problem solver, passionate about building scalable and fault-tolerant software systems.\n\n";
      let introCurrentText = terminalText;

      const typeIntroCommand = () => {
        if (introIndex < introCommand.length) {
          introCurrentText += introCommand[introIndex];
          setTerminalText(introCurrentText);
          introIndex++;
          setTimeout(typeIntroCommand, 100); // Type command characters every 100ms
        } else {
          // Once intro command is typed, show output instantly
          setTimeout(() => {
            introCurrentText += introOutput;
            setTerminalText(introCurrentText);
            setTimeout(() => {
              setShowCurrentWork(true); // Trigger the 'current_work' command
            }, 1000);
          }, 500);
        }
      };

      typeIntroCommand();
    }
  }, [showIntro]);

  useEffect(() => {
    if (showCurrentWork) {
      let currentWorkIndex = 0;
      const currentWorkCommand = "> get my_current_work";
      const currentWorkOutput =
        "\nDoing 6-month internship at Bose Professional, building next-generation audio software platform.\n\n";
      let currentWorkCurrentText = terminalText;

      const typeCurrentWorkCommand = () => {
        if (currentWorkIndex < currentWorkCommand.length) {
          currentWorkCurrentText += currentWorkCommand[currentWorkIndex];
          setTerminalText(currentWorkCurrentText);
          currentWorkIndex++;
          setTimeout(typeCurrentWorkCommand, 100); // Type command characters every 100ms
        } else {
          // Once current_work command is typed, show output instantly
          setTimeout(() => {
            currentWorkCurrentText += currentWorkOutput;
            setTerminalText(currentWorkCurrentText);
            setTimeout(() => {
              setShowCurrentStudy(true); // Trigger the 'current_study' command
            }, 1000);
          }, 500);
        }
      };

      typeCurrentWorkCommand();
    }
  }, [showCurrentWork]);

  useEffect(() => {
    if (showCurrentStudy) {
      let currentStudyIndex = 0;
      const currentStudyCommand = "> get my_current_study";
      const currentStudyOutput =
        "\nMaster in Computer Science at Northeastern, Boston -- focusing on algorithms and distributed systems.\n\n";
      let currentStudyCurrentText = terminalText;

      const typeCurrentStudyCommand = () => {
        if (currentStudyIndex < currentStudyCommand.length) {
          currentStudyCurrentText += currentStudyCommand[currentStudyIndex];
          setTerminalText(currentStudyCurrentText);
          currentStudyIndex++;
          setTimeout(typeCurrentStudyCommand, 100); // Type command characters every 100ms
        } else {
          // Once current_study command is typed, show output instantly
          setTimeout(() => {
            currentStudyCurrentText += currentStudyOutput;
            setTerminalText(currentStudyCurrentText);
            setTimeout(() => {
              setShowHireMe(true); // Trigger the 'hire_me' command
            }, 1000);
          }, 500);
        }
      };

      typeCurrentStudyCommand();
    }
  }, [showCurrentStudy]);

  useEffect(() => {
    if (showHireMe) {
      let hireMeIndex = 0;
      const hireMeCommand = "> available_for_hire?";
      const hireMeOutput =
        "\nYes, I am! Starting May 2025. Let's create something incredible together.\n\n";

      let hireMeCurrentText = terminalText;

      const typeHireMeCommand = () => {
        if (hireMeIndex < hireMeCommand.length) {
          hireMeCurrentText += hireMeCommand[hireMeIndex];
          setTerminalText(hireMeCurrentText);
          hireMeIndex++;
          setTimeout(typeHireMeCommand, 100); // Type command characters every 100ms
        } else {
          // Once hire_me command is typed, show output instantly
          setTimeout(() => {
            hireMeCurrentText += hireMeOutput;
            setTerminalText(hireMeCurrentText);
            setTimeout(() => {
              setShowLanguagesAdmired(true); // Trigger the 'languages_admired' command
            }, 1000);
          }, 500);
        }
      };

      typeHireMeCommand();
    }
  }, [showHireMe]);

  useEffect(() => {
    if (showLanguagesAdmired) {
      let languagesAdmiredIndex = 0;
      const languagesAdmiredCommand = "> get languages_comfortable_in";
      const languagesAdmiredOutput =
        "\nPython, JavaScript, Elixir, Rust, C, Go\n\n";
      let languagesAdmiredCurrentText = terminalText;

      const typeLanguagesAdmiredCommand = () => {
        if (languagesAdmiredIndex < languagesAdmiredCommand.length) {
          languagesAdmiredCurrentText +=
            languagesAdmiredCommand[languagesAdmiredIndex];
          setTerminalText(languagesAdmiredCurrentText);
          languagesAdmiredIndex++;
          setTimeout(typeLanguagesAdmiredCommand, 100); // Type command characters every 100ms
        } else {
          // Once hire_me command is typed, show output instantly
          setTimeout(() => {
            languagesAdmiredCurrentText += languagesAdmiredOutput;
            setTerminalText(languagesAdmiredCurrentText);
          }, 500);
        }
      };

      typeLanguagesAdmiredCommand();
    }
  }, [showLanguagesAdmired]);

  useEffect(() => {
    // Handle cursor blinking
    const cursorBlink = setInterval(() => {
      setCursorVisible((prevVisible) => !prevVisible);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <div className="landing-container">
      <div className="terminal">
        <pre>
          {terminalText}
          <span className={`cursor ${cursorVisible ? "visible" : ""}`}>
            &nbsp;
          </span>
        </pre>
      </div>
    </div>
  );
}

export default Profile;

import React, { useState } from "react";
import { useSelector } from "react-redux";

function ArtyomC() {
  const [spokenText, setSpokenText] = useState("");
  const authSlice = useSelector((state)=> state.auth)

  const handleSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    // recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = authSlice.language;
    
    recognition.onresult = (event) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      setSpokenText(finalTranscript);
    };

    recognition.onerror = (event) => {
      console.log("Speech recognition error occurred: ", event.error);
    };

    recognition.onend = () => {
      console.log("Speech recognition service disconnected");
    };

    recognition.start();
    
    recognition.onspeechend = () => {
      recognition.stop();
    }
  };

  return (
    <div>
      <button onClick={handleSpeechRecognition}>Speak</button>
      <div>{spokenText}</div>
    </div>
  );
}

export default ArtyomC;

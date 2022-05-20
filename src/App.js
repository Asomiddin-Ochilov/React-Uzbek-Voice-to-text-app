import './App.css';
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
function App() {
    const commands = [
        {
            command : 'open *',
            callback: (site)=>{
                window.open('https://'+site)
            }
        } ,
        {
            command : 'background color *',
            callback: (color)=>{
                document.body.style.background = color;
            }
        }
    ]
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition({commands});

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

  return (
      <div className={'container'}>
         <div className="header">
          <button onClick={SpeechRecognition.startListening({continuous:true,language:'uz'})} >
              <i className="bi bi-mic" style={{color:`${listening ? 'blue' : 'green'}`}}> </i>
          </button>
          <button onClick={SpeechRecognition.stopListening}>
              <i className="bi bi-mic-mute"> </i>
          </button>
          <button onClick={resetTranscript}>
              <i className="bi bi-arrow-clockwise"> </i>
          </button>
         </div>
          <div className={'block'}>

              <p>{transcript}</p>
          </div>
      </div>
  );
}

export default App;

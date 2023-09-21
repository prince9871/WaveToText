import "./App.css"
import useClipboard from "react-use-clipboard";
import useSpeechToText from "./useSpeechToText";
const App = () => {
  const { textToCopy, startListening, stopListening, browserSupportsSpeechRecognition } = useSpeechToText();
  const [isCopied, setCopied] = useClipboard(textToCopy);

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <div className="container">
      <h2>Speech to Text Converter</h2>
      <br/>
      <p>A React hook that converts speech from the microphone to text and makes it available to your React components.</p>

      <div className="main-content">
        {textToCopy}
      </div>

      <div className="btn-style">
        <button onClick={setCopied}>
          {isCopied ? 'Copied!' : 'Copy to clipboard'}
        </button>
        <button onClick={startListening}>Start Listening</button>
        <button onClick={stopListening}>Stop Listening</button>
      </div>

    </div>
  );
};

export default App;

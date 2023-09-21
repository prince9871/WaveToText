import { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const useSpeechToText = () => {
    const [textToCopy, setTextToCopy] = useState();
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    useEffect(() => {
        if (transcript) {
            setTextToCopy(transcript);
        }
    }, [transcript]);

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const stopListening = () => SpeechRecognition.stopListening();

    return {
        textToCopy,
        startListening,
        stopListening,
        browserSupportsSpeechRecognition
    };
};

export default useSpeechToText;

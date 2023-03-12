// import { useEffect, useState } from 'react';
// import { createSpeechServicesPonyfill } from 'web-speech-cognitive-services';

// const SUBSCRIPTION_KEY = process.env.REACT_APP_SUBSCRIPTION_KEY;
// const REGION = process.env.REACT_APP_REGION;

// const speechRecognizer = createSpeechServicesPonyfill({
//   credentials: {
//     region: REGION,
//     subscriptionKey: SUBSCRIPTION_KEY,
//   }
// });

// function SpeechToTextAzure({ onResult }) {
//   const [isListening, setIsListening] = useState(false);

//   const startListening = () => {
//     setIsListening(true);
//     speechRecognizer.SpeechRecognition.startContinuousRecognitionAsync();
//   };

//   const stopListening = () => {
//     setIsListening(false);
//     speechRecognizer.SpeechRecognition.stopContinuousRecognitionAsync();
//   };

//   useEffect(() => {
//     speechRecognizer.SpeechRecognition.recognizeOnceAsync(
//       (result) => {
//         if (result.text) {
//           onResult(result.text);
//         }
//       },
//       (error) => console.error(error)
//     );
//   }, []);

//   return (
//     <div>
//       <button disabled={isListening} onClick={startListening}>
//         Start
//       </button>
//       <button disabled={!isListening} onClick={stopListening}>
//         Stop
//       </button>
//     </div>
//   );
// }

// export default SpeechToTextAzure;

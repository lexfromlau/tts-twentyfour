import React from 'react';
import { data } from './data/exampleData';
import { getToken } from './util/getToken';
import { fetchTextToSpeech } from './util/fetchTextToSpeech';

const App = () => {
  const [audioString, setAudioString] = React.useState('');

  React.useEffect(() => {
    getToken(
      import.meta.env.VITE_ISSUE_TOKEN_ENDPOINT,
      import.meta.env.VITE_SPEECH_KEY
    )
      .then((token) => {
        if (token) {
          fetchTextToSpeech(
            token,
            import.meta.env.VITE_SPEECH_REGION_ENDPOINT,
            data.notes,
            setAudioString
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const audio = new Audio(audioString);

  const handleClick = () => {
    audio.play();
  };

  return (
    <>
      <h2>{import.meta.env.VITE_APP_TITLE}</h2>
      <div>{data.notes}</div>
      <button onClick={handleClick}>Click to play the audio file</button>
    </>
  );
};

export default App;

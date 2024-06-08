export const fetchTextToSpeech = async (
  accessToken: string,
  url: string,
  textToSpeech: string,
  setAudioString: React.Dispatch<React.SetStateAction<string>>
) => {
  const ssml = `
        <speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>
            <voice name='Microsoft Server Speech Text to Speech Voice (en-US, GuyNeural)'>
                ${textToSpeech}
            </voice>
        </speak>
    `;

  const headers = {
    'X-Microsoft-OutputFormat': 'riff-24khz-16bit-mono-pcm',
    'Content-Type': 'application/ssml+xml',
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: ssml,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    setAudioString(audioUrl);
  } catch (error) {
    console.error('Error:', error);
  }
};

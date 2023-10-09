import { useEffect, useState } from 'preact/hooks';

export function Button({ audioUrl, label }) {
  const [audio, setAudio] = useState();
  useEffect(() => {
    setAudio(new Audio(audioUrl));
  }, [audioUrl]);
  return (
    <button
      onClick={() => {
        console.log(audio);
        audio?.play();
      }}
    >
      {label}
    </button>
  );
}

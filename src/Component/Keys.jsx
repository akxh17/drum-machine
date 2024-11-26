import { useEffect } from "react";

function playAudio(url, volume) {
  const audio = new Audio(url);
  audio.currentTime = 0;
  audio.volume = volume;
  audio.play();
}
function Keys(props) {
  const { value, volume ,power} = props;
  function handleKeyPress(event) {
    if (event.keyCode === value.keyCode && !power) {
      playAudio(value.url, volume);
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [volume,power]);
  return (
    <button
      className="audio--button"
      onClick={() => playAudio(value.url, volume)}
      disabled={power}
    > 
      {value.keyTrigger}
    </button>
  );
}

export default Keys;

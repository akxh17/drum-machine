import { useState } from "react";
import Keys from "./Component/Keys";
import Track1 from "./Component/Track1";
import Track2 from "./Component/Track2";
import { CgToggleSquareOff } from "react-icons/cg";
import { CgToggleSquare } from "react-icons/cg";

function App() {
  const [currTrack, setCurrTrack] = useState(Track1);
  const [volume,setVolume] = useState(0.5);
  const [power,setPower] = useState(false);

  function handleTrackChange() {
    currTrack === Track1 ? setCurrTrack(Track2) : setCurrTrack(Track1);
  }

  function handleVolumeChange(event){
    setVolume(event.target.value);
  }

  function handlePower(){
    setPower(prevPower=>!prevPower);
    console.log(power);

  }

  return (
    <div className="wrapper--container">
      <div className="main--container">
        <div className="audio--button--container">
          {currTrack.map((audio) => (
            <Keys key={audio.id} value={audio} volume={volume} power={power}/>
          ))}
        </div>
        <div className="track--button--container">
          <div onClick={handlePower}>
            {power?<CgToggleSquare className="power--button--off"/>:<CgToggleSquareOff className="power--button--on"/>}
          </div>
          <div className="track--name">
            {currTrack === Track1 ? "Heater Kit" : "Smooth Piano Kit"}
          </div>
          <button className="track--button" onClick={handleTrackChange} disabled={power}>
            Change Track
          </button>
          <input
            className="volume--button"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

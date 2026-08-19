import { Vibrate } from "vibrate"

export default function App() {
  return(
    <>
      <button onClick={() => Vibrate.turnOnVibrate()}>Getar</button>
    </>
  )
}
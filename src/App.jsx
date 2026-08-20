import { ScreenBrightness } from "screenbrightness"

export default function App() {
  function brightness() {
    let value = ParseFloat(Math.random())
    ScreenBrightness.setBrightness(value)
  }
  return(
    <>
      <button onClick={() => brightness()}>Getar</button>
    </>
  )
}
import { ScreenBrightness } from "screenbrightness"

export default function App() {
  async function brightness() {
    let value = ParseFloat(Math.random())
    await ScreenBrightness.setBrightness(value)
  }
  return(
    <>
      <button onClick={() => brightness()}>Getar</button>
    </>
  )
}
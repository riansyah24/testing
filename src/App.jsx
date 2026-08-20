import { Flashlight } from "flashlight"
import { useState, useEffect } from "react"

export default function App() {
  const [isEnabled,setIsEnabled] = useState()

  const setFlashlight = async() => {
    const torch = await Flashlight.turnFlashlight()
    setIsEnabled(torch.isTorchEnable)
  }

  useEffect(() => {
    setFlashlight()
  },[])
  return(
    <>
      <button onClick={() => setFlashlight(!isEnabled)}>Nyala</button>
    </>
  )
}
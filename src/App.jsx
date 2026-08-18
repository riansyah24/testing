import { useState, useEffect } from 'react'
import { battery } from "battery"

function App() {
  const [batteryLevel, setBatteryLevel] = useState(0)

  useEffect(() => {
    const getBattery = async() => {
      const {level} = await battery.getBatteryLevel()
    setBattery(level)
    }

    getBatery()
  },[])
  return(
    <>
      <p>Battery level: {battery}%</p>
    </>
  )
}

export default App

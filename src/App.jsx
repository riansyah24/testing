import { useState, useEffect } from 'react'
import { battery } from "battery"

function App() {
  const [battery, setBattery] = useState(0)

  useEffect(async() => {
    const {level} = battery.getBatteryLevel()
    setBattery(level)
  },[])
  return(
    <>
      <p>Battery level: {battery}%</p>
    </>
  )
}

export default App

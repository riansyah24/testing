import { useState, useEffect } from 'react'
import { battery } from "battery"

function App() {
  const [batteryLevel, setBatteryLevel] = useState(0)

  useEffect(() => {
    const getBattery = async () => {
      try {
        const { level } = await battery.getBatteryLevel()
        setBatteryLevel(level)
      } catch (error) {
        console.error("Gagal mengambil level baterai:", error)
      }
    }

    getBattery()
  }, [])

  return (
    <>
      <p>Battery level: {batteryLevel}%</p>
    </>
  )
}

export default App

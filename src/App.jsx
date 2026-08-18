import { useState, useEffect } from 'react'
import { battery } from "battery"

function App() {
  const [batteryStats, setBatteryStats] = useState({
    level:0,
    isCharging:false,
    chargeType:"none"
  })

  useEffect(() => {
    const getBattery = async () => {
      try {
        const { level } = await battery.getBatteryLevel()
        const { isCharging } = await battery.isBatteryCharging()
        const { chargeType } = await battery.getChargeType()
        setBatteryStats({level,isCharging,chargeType})
      } catch (error) {
        console.error("Gagal mengambil level baterai:", error)
      }
    }

    getBattery()
  }, [])

  return (
    <>
      <p>Battery level: {batteryStats.level}%</p>
      <p>Battery is charging: {`${batteryStats.isCharging}`}</p>
      <p>Charging type: {chargeType}</p>
    </>
  )
}

export default App

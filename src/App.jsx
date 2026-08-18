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
        const { batteryTemperature } = await battery.getBatteryTemperature()
        const { batteryVoltage } = await battery.getBatteryVoltage()
        setBatteryStats({level,isCharging,chargeType, batteryTemperature, batteryVoltage})
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
      <p>Charging type: {batteryStats.chargeType}</p>
      <p>Battery temperature: {batteryStats.batteryTemperature}</p>
      <p>Battery voltage: {batteryStats.batteryVoltage}V</p>
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import { deviceInfo } from "deviceinfo"

function App() {
  const [info, setInfo] = useState("")

  useEffect(() => {
    const getDeviceInfo = async() => {
      const { manufacture } = await deviceInfo.deviceInfoManufacture()

      setInfo(manufacture)
    }

    getDeviceInfo()
  })

  return (
    <>
      <p>{info}</p>
    </>
  )
}

export default App

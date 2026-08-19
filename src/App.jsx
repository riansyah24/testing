import { useState, useEffect } from 'react'
import { deviceInfo } from "deviceinfo"

function App() {
  const [info, setInfo] = useState("")

  useEffect(() => {
    const getDeviceInfo = async() => {
      const { manufacture } = await deviceInfo.deviceInfoManufacture()
      const { brand } = await deviceInfo.deviceInfoBrand()
      const { board } = await deviceInfo.deviceInfoBoard()
      const { hardware } = await deviceInfo.deviceInfoHardware()
      const { osVersion } = await deviceInfo.deviceInfoOSVersion()
      const { width } = await deviceInfo.deviceWidth()
      const { height } = await deviceInfo.deviceHeight()
      const { density } = await deviceInfo.deviceDensity()
      const { totalRam } = await deviceInfo.deviceTotalRam()
      const { availableRam } = await deviceInfo.deviceAvailableRam()

      setInfo({manufacture,brand,board,hardware,osVersion,width,height,density,totalRam,avavailableRam})
    }

    getDeviceInfo()
  },[])

  return (
    <>
      <p>Manufacture : {info.manufacture}</p>
      <p>Brand : {info.brand}</p>
      <p>Board : {info.board}</p>
      <p>Hardware : {info.hardware}</p>
      <p>OS Version : {info.osVersion}</p>
      <p>Width : {info.width}</p>
      <p>Height : {info.height}</p>
      <p>Density : {info.density}</p>
      <p>Total RAM : {info.totalRam}</p>
      <p>Available RAM : {info.availableRam}</p>
    </>
  )
}

export default App

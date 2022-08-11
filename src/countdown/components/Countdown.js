import { useState, useEffect } from "react"

import {getLaunchTimestamp} from '../utils/CountdownUtils'

import CountdownTimer from './CountdownTImer'
import Footer from '../layouts/Footer'

const defaultLaunchTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
}

function Countdown({launchTimestamp}) {

    const [launchTime, setLaunchTime] = useState(defaultLaunchTime)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const intervalId = setInterval(() => {
          updateLaunchTime(launchTimestamp)
        }, 1000);
        return () => clearTimeout(intervalId)
  
      }, [launchTimestamp])
  
      const updateLaunchTime = (countdown) => {
          setLaunchTime(getLaunchTimestamp(countdown))
          setLoading(false)
      }

    return (
        <div className="text-center mt-28">
            {
            loading ? (
                <div className='loading'>
                    <div className='spinner'></div>
                </div>
            ) : (
                <div className=''>
                    <CountdownTimer launchTime={launchTime}  />
                    <Footer />
                </div>
            )
            }
        </div>
    )
}

export default Countdown
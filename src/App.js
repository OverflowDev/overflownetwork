import './index.css'
import dayjs from 'dayjs';
import { useEffect } from 'react';

import Countdown from './countdown/components/Countdown'
import Darkmode from './darkmode/Darkmode';
import Portfolio from './portfolio/components/Portfolio';
import Overflow from './portfolio/components/Overflow';
import Footer from './countdown/layouts/Footer';


function App() {

    // *1000 means convert to milliseconds 
    const launchTimestamp = dayjs(1660343100 * 1000)
    const currentDayJs = dayjs()

  return (
    <div className='bg-teal-50 dark:bg-veryDarkBlue h-screen'>
      <Darkmode />
      <Countdown launchTimestamp={launchTimestamp} />
      {/* <Portfolio /> */}

    </div>
  );
    
  //   if (!launchTimestamp.isBefore(currentDayJs)) {

  //   return (
  //     <div className="h-screen">
  //       <Countdown launchTimestamp={launchTimestamp} />
  //     </div>
  //   )

  // } else {
  //   return (
  //     <div className=''>
  //       <Portfolio />
  //     </div>
  //   )
  // }
}

export default App;

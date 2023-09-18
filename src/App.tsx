import "./App.css";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import TimezoneModal from "./TimezoneModal";

dayjs.extend(utc);
dayjs.extend(timezone);
// Usage:
// console.log(dayjs().tz("Asia/Taipei").format());

function App() {
  const [userTimezone, setUserTimezone] = useState(dayjs.tz.guess());
  const [time, setTime] = useState<Dayjs>(dayjs());

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 1000);

    // cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="container__timezone">
        <h2>{userTimezone.replace("_", " ")}</h2>
        <TimezoneModal
          currentTimezone={userTimezone}
          setCurrentTimezone={setUserTimezone}
        />
      </div>
      <h1>{time.tz(userTimezone).format("hh:mm:ss A")}</h1>
      <h2>{time.tz(userTimezone).format("MMMM D, YYYY")}</h2>
    </div>
  );
}

export default App;

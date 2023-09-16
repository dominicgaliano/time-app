import "./App.css";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

function App() {
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
      <h2>{dayjs.tz.guess()}</h2>
      <h1>{time.format("hh:mm:ss A")}</h1>
      <h2>{time.format("MMMM D, YYYY")}</h2>
    </div>
  );
}

export default App;

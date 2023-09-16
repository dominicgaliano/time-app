import "./App.css";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";

function App() {
  const [time, setTime] = useState<Dayjs>(dayjs());

  // useEffect(() => {
  //   setTime(dayjs());
  // }, [time]);

  return (
    <div className="container">
      <h2>Location</h2>
      <h1>{time.format("hh:mm:ss A")}</h1>
      <h2>{time.format("MMMM D, YYYY")}</h2>
    </div>
  );
}

export default App;

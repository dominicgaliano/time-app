import "./App.css";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";

function App() {
  const [time, setTime] = useState<Dayjs>(dayjs());

  // useEffect(() => {
  //   setTime(dayjs());
  // }, [time]);

  return <>The time is: {time.format()}</>;
}

export default App;

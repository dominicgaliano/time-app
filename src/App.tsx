import "./App.css";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(dayjs().format());
  }, [time]);

  return <>The time is: {time}</>;
}

export default App;

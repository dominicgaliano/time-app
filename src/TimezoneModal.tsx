import MicroModal from "react-micro-modal";
import Select from "react-select";
import { useState } from "react";
// timezones from file as Intl.supportedValuesOf('timeZone') does not work in react.
import timezones from "./data/timezones.json";

interface Props {
  currentTimezone: string;
  setCurrentTimezone: (timezone: string) => void;
}

export default function TimezoneModal({
  currentTimezone,
  setCurrentTimezone,
}: Props) {
  const timezoneOptions = timezones.map((timezone) => {
    return {
      value: timezone,
      label: timezone,
    };
  });

  const onChange = (option) => {
    if (option?.value) {
      setCurrentTimezone(option!.value);
    }
  };

  return (
    <MicroModal
      trigger={(handleOpen) => (
        <button onClick={handleOpen}>Change Timezone</button>
      )}
      children={(handleClose) => (
        <div style={{ width: "300px" }}>
          <label>Change Timezone</label>
          <Select
            value={currentTimezone}
            options={timezoneOptions}
            onChange={onChange}
          />
          <button onClick={handleClose}>Apply</button>
        </div>
      )}
    />
  );
}

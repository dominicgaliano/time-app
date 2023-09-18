// @ts-nocheck
import MicroModal from "react-micro-modal";
import Select from "react-select";
import TimezoneSelector from "./TimezoneSelector";
import { useState } from "react";
import "./TimezoneModal.css";
import formatTimezoneString from "../utils/formatTimezoneString";
// timezones from file as Intl.supportedValuesOf('timeZone') does not work in react.
import timezones from "../data/timezones.json";

interface Props {
  currentTimezone: string;
  setCurrentTimezone: (timezone: string) => void;
}

export default function TimezoneModal({
  currentTimezone,
  setCurrentTimezone,
}: Props) {
  const [modalTimezone, setModalTimezone] = useState(currentTimezone);

  const timezoneOptions = timezones.map((timezone) => {
    return {
      value: timezone,
      label: formatTimezoneString(timezone),
    };
  });

  const onChange = (option) => {
    if (option?.value) {
      setModalTimezone(option!.value);
    }
  };

  return (
    <MicroModal
      trigger={(handleOpen) => (
        <TimezoneSelector
          handleOpen={handleOpen}
          currentTimezone={currentTimezone}
          setModalTimezone={setModalTimezone}
        />
      )}
      children={(handleClose) => (
        <>
          <h3>Change Timezone</h3>
          <div style={{ width: "300px" }}>
            <Select
              value={currentTimezone}
              options={timezoneOptions}
              onChange={onChange}
              placeholder={formatTimezoneString(modalTimezone)}
            />
          </div>
          <button
            onClick={() => {
              // set app timezone
              setCurrentTimezone(modalTimezone);

              // close modal
              handleClose();
            }}
            style={{
              backgroundColor: "#1a1a1a",
              color: "var(--global-text-white)",
            }}
          >
            Apply
          </button>
        </>
      )}
      overrides={{
        Dialog: {
          className: "modal-container",
          style: { overflow: "visible", color: "var(--global-text-black)" },
        },
      }}
    />
  );
}

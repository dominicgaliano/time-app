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
        />
      )}
      children={(handleClose) => (
        <div>
          <h3>Change Timezone</h3>
          <Select
            value={currentTimezone}
            options={timezoneOptions}
            onChange={onChange}
            placeholder={formatTimezoneString(modalTimezone)}
          />
          <button
            onClick={() => {
              // set app timezone
              setCurrentTimezone(modalTimezone);

              // close modal
              handleClose();
            }}
          >
            Apply
          </button>
        </div>
      )}
      overrides={{
        Dialog: {
          // replace
          style: { backgroundColor: "grey", overflow: "visible" },
        },
      }}
    />
  );
}

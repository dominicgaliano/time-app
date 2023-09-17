import MicroModal from "react-micro-modal";
import Select, { ActionMeta } from "react-select";
// timezones from file as Intl.supportedValuesOf('timeZone') does not work in react.
import timezones from "./data/timezones.json";

export default function TimezoneModal({ currentTimezone, setCurrentTimezone }) {
  const timezoneOptions = timezones.map((timezone) => {
    return {
      value: timezone,
      label: timezone,
    };
  });

  const handleTimezoneChange = (
    option: typeof Option | null,
    actionMeta: ActionMeta<typeof Option>
  ): void => {
    setCurrentTimezone(option);
  };

  return (
    <MicroModal
      trigger={(handleOpen) => (
        <button onClick={handleOpen}>Change Timezone</button>
      )}
      children={(handleClose) => (
        <div>
          <label>Change Timezone</label>
          <Select options={timezoneOptions} onChange={handleTimezoneChange} />
          <button onClick={handleClose}>Apply</button>
        </div>
      )}
    />
  );
}

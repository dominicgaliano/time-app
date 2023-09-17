import MicroModal from "react-micro-modal";
import Select from "react-select";
// timezones from file as Intl.supportedValuesOf('timeZone') does not work in react.
import timezones from "./data/timezones.json";

export default function TimezoneModal() {
  const timezoneOptions = timezones.map((timezone) => {
    return {
      value: timezone,
      label: timezone,
    };
  });

  return (
    <MicroModal
      trigger={(handleOpen) => (
        <button onClick={handleOpen}>Change Timezone</button>
      )}
      children={(handleClose) => (
        <div>
          <label>Change Timezone</label>
          <Select options={timezoneOptions} />
          <button onClick={handleClose}>Apply</button>
        </div>
      )}
    />
  );
}

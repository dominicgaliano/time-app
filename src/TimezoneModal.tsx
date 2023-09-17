import MicroModal from "react-micro-modal";
// timezones from file as Intl.supportedValuesOf('timeZone') does not work in react.
import timezones from ".data/timezones.json";

export default function TimezoneModal() {
  return (
    <MicroModal
      trigger={(handleOpen) => (
        <button onClick={handleOpen}>Change Timezone</button>
      )}
      children={(handleClose) => (
        <form>
          <label htmlFor="timezones">Change Timezone</label>
          <select id="timezones" name="timezones">
            {timezones.map((timezone) => (
              <option value={timezone}>{timezone}</option>
            ))}
          </select>
          <button onClick={handleClose}>Apply</button>
        </form>
      )}
    />
  );
}

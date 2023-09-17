import MicroModal from "react-micro-modal";
// timezones from file as Intl.supportedValuesOf('timeZone') does not work in react.
import * as timezones from "./timezones.json";

export default function TimezoneModal() {
  return (
    <MicroModal
      trigger={(handleOpen) => (
        <button onClick={handleOpen}>Change Timezone</button>
      )}
      children={(handleClose) => (
        <div>
          <button onClick={handleClose}>Close!</button>
        </div>
      )}
    />
  );
}

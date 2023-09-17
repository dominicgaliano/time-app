import MicroModal from "react-micro-modal";

export default function TimezoneModal() {
  return (
    <MicroModal
      trigger={(handleOpen) => (
        <button onClick={handleOpen}>Change Timezone</button>
      )}
      children={(handleClose) => <button onClick={handleClose}>Close!</button>}
    />
  );
}

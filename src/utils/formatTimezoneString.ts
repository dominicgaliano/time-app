export default function formatTimezoneString(timezone: string): String {
  return timezone.replaceAll("_", " ").replaceAll("/", " - ");
}

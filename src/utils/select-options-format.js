export default function getFormattedOptionsForSelect(
  jsonObject
) {
  const formattedJSONObject = jsonObject.map(entry => ({
    value: entry[0],
    label: String(entry[1]),
  }));
  return formattedJSONObject;
}

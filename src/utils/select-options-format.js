export default function getFormattedOptionsForSelect(
  jsonObject
) {
  const formattedJSONObject = Object.entries(jsonObject).map(([key, value]) => ({
    value: key,
    label: `${value} - ${key}`
  }));
  return formattedJSONObject;
}

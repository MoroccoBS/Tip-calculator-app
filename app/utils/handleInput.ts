// Handles the change event of an input element.

const handleChange = (value: string, prev: string): string => {
  // Regex To check if input is a number or a dot
  const regex = /^[0-9.]*$/;
  const lastValue = value[value.length - 1]; // AKA key clicked;
  // Logic to check if the inserted value is a dot and if the previous value already have a dot
  if (regex.test(value)) {
    return lastValue === "." && prev.includes(".") ? prev : value;
  } else {
    return "";
  }
};

export default handleChange;

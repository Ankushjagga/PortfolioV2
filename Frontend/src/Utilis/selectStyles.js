/**
 * Dark theme for react-select. It renders its own emotion styles, so a plain
 * stylesheet cannot reach it — the overrides have to be passed as a prop.
 * Shared here so every admin form uses the same dropdown.
 */
const surface = "#1b1b1f";
const surfaceRaised = "#23232a";
const accent = "#c9a0d0";
const text = "#f2f2f4";
const muted = "#a9a9b3";
const border = "rgba(194, 137, 199, 0.28)";

export const selectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: surface,
    borderColor: state.isFocused ? accent : border,
    boxShadow: state.isFocused ? "0 0 0 3px rgba(194, 137, 199, 0.18)" : "none",
    borderRadius: "0.8rem",
    minHeight: "4.6rem",
    fontSize: "1.5rem",
    ":hover": { borderColor: accent },
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: surface,
    border: `1px solid ${border}`,
    borderRadius: "0.8rem",
    overflow: "hidden",
    zIndex: 20,
  }),
  menuList: (base) => ({ ...base, fontSize: "1.5rem" }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? accent
      : state.isFocused
      ? surfaceRaised
      : "transparent",
    color: state.isSelected ? "#16121a" : text,
    cursor: "pointer",
  }),
  singleValue: (base) => ({ ...base, color: text }),
  input: (base) => ({ ...base, color: text }),
  placeholder: (base) => ({ ...base, color: muted }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: surfaceRaised,
    borderRadius: "0.5rem",
  }),
  multiValueLabel: (base) => ({ ...base, color: text, fontSize: "1.3rem" }),
  multiValueRemove: (base) => ({
    ...base,
    color: muted,
    ":hover": { backgroundColor: accent, color: "#16121a" },
  }),
  indicatorSeparator: (base) => ({ ...base, backgroundColor: border }),
  dropdownIndicator: (base) => ({
    ...base,
    color: muted,
    ":hover": { color: accent },
  }),
};

export default selectStyles;

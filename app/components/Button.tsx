"use client";

interface ButtonProps {
  value: number;
  isChecked?: boolean;
  handleChange?: () => void;
}

function Button({ value, isChecked, handleChange }: ButtonProps) {
  return (
    <button
      onClick={handleChange}
      className={`px-6 py-4 rounded-md text-2xl text-White hover:bg-colorHover transition-all hover:text-VeryDarCyan ${
        isChecked ? "bg-StrongCyan" : "bg-VeryDarCyan"
      }`}
    >
      {value}%
    </button>
  );
}

export default Button;

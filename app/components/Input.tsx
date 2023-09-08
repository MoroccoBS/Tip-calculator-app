interface InputProps {
  placeholder?: string;
  icon?: React.ReactNode;
  error?: boolean;
  onChange: (e: any) => void;
  value?: number | string;
}
function Input({
  placeholder,
  icon,
  error,
  value,
  onChange,
  ...props
}: InputProps) {
  return (
    <div className="w-full bg-VeryLightGrayishCyan relative text-xl rounded-xl text-VeryDarCyan">
      <input
        onInput={onChange}
        className={`placeholder:text-GrayishCyan border-[3px] placeholder:opacity-50 focus:border-StrongCyan focus:outline-none  p-4 w-full transition-all rounded-xl ${
          error ? "border-red-500" : ""
        }`}
        type="text"
        inputMode="numeric"
        placeholder={placeholder}
        dir="rtl"
        value={value}
        {...props}
      />
      <span className="text-GrayishCyan opacity-50 absolute -translate-y-1/2 top-1/2 left-4 text-2xl">
        {icon}
      </span>
    </div>
  );
}

export default Input;

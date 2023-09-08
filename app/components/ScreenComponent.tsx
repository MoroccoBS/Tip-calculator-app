interface ScreenComponentProps {
  title: string;
  value: number;
}

function ScreenComponent({ title, value }: ScreenComponentProps) {
  return (
    <div className=" w-full flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-lg text-white">{title}</h1>
        <h2 className="text-base text-gray-400">/person</h2>
      </div>
      <h1 className="text-5xl text-StrongCyan">${value}</h1>
    </div>
  );
}

export default ScreenComponent;

import ScreenComponent from "./ScreenComponent";

interface ScreenProps {
  onClick: () => void;
  Total: number;
  TotalPerPerson: number;
  Calculate: () => void;
}

function Screen({ onClick, Total, TotalPerPerson, Calculate }: ScreenProps) {
  return (
    <div className="w-full p-10 bg-VeryDarCyan rounded-lg gap-10 flex flex-col">
      <div className="w-full flex flex-col gap-6">
        <ScreenComponent title="Tip Amout" value={TotalPerPerson} />
        <ScreenComponent title="Total" value={Total} />
      </div>
      <div className="flex w-full gap-4 mt-auto">
        <button
          onClick={Calculate}
          className="text-VeryDarCyan w-full py-4 text-2xl bg-StrongCyan hover:bg-colorHover transition-all rounded-lg"
        >
          Calculate
        </button>
        <button
          onClick={onClick}
          className="text-White w-full py-4 text-2xl border-2 border-StrongCyan transition-all rounded-lg"
        >
          REST
        </button>
      </div>
    </div>
  );
}

export default Screen;

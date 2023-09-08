"use client";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import handleChange from "../utils/handleInput";
const tips = [5, 10, 15, 25, 50];

interface TipsProps {
  onChange: (e: any) => void;
  value: string;
}

function Tips({ onChange, value }: TipsProps) {
  const [activeBtn, setActiveBtn] = useState<number | null>(0);
  const checkHandler = (index: number | null, value: number | string) => {
    setActiveBtn(index);
    onChange(value);
  };
  return (
    <div className="flex flex-col gap-4">
      <h1>Select Tip %</h1>
      <div className="grid grid-cols-3 gap-4 w-full">
        {tips.map((tip: number, index) => (
          <Button
            key={tip}
            value={tip}
            isChecked={activeBtn === index}
            handleChange={() => checkHandler(index, tip)}
          />
        ))}
        <Input
          value={value}
          placeholder="Custom"
          icon={"%"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            checkHandler(null, handleChange(e.target.value, value));
          }}
        />
      </div>
    </div>
  );
}

export default Tips;

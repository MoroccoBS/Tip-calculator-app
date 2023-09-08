/* eslint-disable react/no-unescaped-entities */
"use client";
import Input from "./Input";
import { BsFillPersonFill } from "react-icons/bs";
interface PersonsProps {
  error: boolean;
  onChange: (e: any) => void;
  value?: number | string;
}

function Persons({ error, onChange, value }: PersonsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <h1>Number of People</h1>
        {error && <h1 className="text-red-500/90">Can't be zero</h1>}
      </div>
      <Input
        value={value}
        placeholder="0"
        icon={<BsFillPersonFill />}
        error={error}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(e);
        }}
      />
    </div>
  );
}

export default Persons;

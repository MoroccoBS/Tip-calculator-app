"use client";
import Input from "./components/Input";
import Screen from "./components/Screen";
import Tips from "./components/Tips";
import Persons from "./components/Persons";
import { useState } from "react";
import handleChange from "./utils/handleInput";

export default function Home() {
  const [bill, setBill] = useState<string>("");
  const [tipPercent, setTipPercent] = useState<string>("5");
  const [people, setPeople] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [totalPerPerson, setTotalPerPerson] = useState<number>(0);
  const [error, setError] = useState("");

  const handleCalculateTip = () => {
    const parsedPeople = parseInt(people); // People can't be a float;
    const parsedBill = parseFloat(bill);
    const parsedTipPercent = parseFloat(tipPercent);
    if (parsedPeople === 0 || Number.isNaN(parsedPeople)) {
      setError("people");
      setTimeout(() => {
        setError("");
      }, 1000);
      return;
    }
    if (parsedBill === 0 || Number.isNaN(parsedBill)) {
      setError("bill");
      setTimeout(() => {
        setError("");
      }, 1000);
      return;
    }
    if (bill === "" || people === "" || tipPercent === "") {
      return;
    }
    const tip = parsedBill * (parsedTipPercent / 100) + parsedBill;
    const tipPerPerson = (tip / parsedPeople).toFixed(2);
    setTotalPerPerson(parseFloat(tipPerPerson));
    setTotal(parseFloat(tip.toFixed(2)));
    setError("");
  };

  const handleReset = () => {
    setBill("");
    setTipPercent("");
    setPeople("");
    setTotal(0);
    setTotalPerPerson(0);
    setError("");
  };
  return (
    <main className="flex h-max min-h-screen py-10 flex-col items-center lg:gap-24 gap-6 justify-center">
      <h1 className="text-2xl text-VeryDarCyan flex flex-col uppercase">
        <span>spli</span>
        <span>tter</span>
      </h1>
      <main className="sm:w-9/12 w-full min-w-min h-max max-h-full sm:p-10 p-6 bg-White flex lg:flex-row flex-col gap-10 rounded-3xl text-gray-400">
        <div className="w-full h-full flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1>Bill</h1>
            <Input
              placeholder="0"
              icon={"$"}
              value={bill}
              error={error === "bill"}
              onChange={(e) => {
                setBill((prev: string) => handleChange(e.target.value, prev));
              }}
            />
          </div>
          <Tips
            value={tipPercent}
            onChange={(e) => {
              setTipPercent(e);
            }}
          />
          <Persons
            value={people}
            error={error === "people"}
            onChange={(e) => {
              setPeople((prev: string) => handleChange(e.target.value, prev));
            }}
          />
        </div>
        <Screen
          Calculate={handleCalculateTip}
          Total={total}
          TotalPerPerson={totalPerPerson}
          onClick={handleReset}
        />
      </main>
    </main>
  );
}

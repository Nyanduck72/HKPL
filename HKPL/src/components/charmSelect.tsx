import { useState } from "react";
import { Charm } from "../types/charm";
import { CharmList } from "../utils/charmInfo";

const CharmSelect = () => {
  const [usedCharmNotchCount, setUsedCharmNotchCount] = useState<number>(0);
  const [selectedCharms, setSelectedCharms] = useState<Charm[]>([]);

  const TOTAL_NOTCHES = 11;
  const OFFSET_INDEXES = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 30, 31, 32, 33, 34, 35, 36, 37, 38,
    39,
  ];

  const handleCharmSelection = (charm: Charm) => {
    const isCharmSelected = selectedCharms.some(
      (selectedCharm: Charm) => selectedCharm.name === charm.name
    );

    if (isCharmSelected) {
      console.log("Charm found, removing it...");
      setSelectedCharms(
        selectedCharms.filter(
          (selectedCharm: Charm) => selectedCharm.name !== charm.name
        )
      );
      setUsedCharmNotchCount(usedCharmNotchCount - charm.notchCost);
    } else if (usedCharmNotchCount < 11) {
      console.log("Adding charm...");
      setSelectedCharms([...selectedCharms, charm]);
      setUsedCharmNotchCount(usedCharmNotchCount + charm.notchCost);
    }
  };

  return (
    <>
      <div className="w-full">
        <h1 className="text-3xl text-white font-bold">Charms</h1>
        <div className="mt-6 mb-3 w-full grid grid-cols-13 gap-2 equipped">
          <h1 className="text-xl font-bold text-white">Equipped</h1>
          <div className="grid grid-cols-11 h-16">
            {selectedCharms.map((charm: Charm) => (
              <div key={charm.name} className="w-20 h-20 bg-white rounded-full">
                <img src={charm.img} alt="" className="w-full" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 mb-3 w-full notches">
          <h1 className="text-lg font-bold text-white">Notches</h1>
          <div className="flex flex-row w-full h-14 mt-4">
            {[
              ...Array(
                usedCharmNotchCount < TOTAL_NOTCHES
                  ? TOTAL_NOTCHES
                  : usedCharmNotchCount
              ),
            ].map((_, index) => {
              const isUsed = index < usedCharmNotchCount;
              const isOverflow = index >= TOTAL_NOTCHES;

              return (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full mr-4 flex items-center justify-center ${
                    isOverflow
                      ? "bg-fuchsia-700 shadow-md shadow-fuchsia-800" // Overflow notches
                      : isUsed
                      ? "bg-neutral-200 shadow-md shadow-neutral-500" // Used notches
                      : "bg-slate-800 shadow-md shadow-slate-500" // Free notches
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full border-2 ${
                      isOverflow
                        ? "bg-fuchsia-500 border-2 border-fuchsia-900" // Overflow notches
                        : isUsed
                        ? "bg-neutral-50 border-2 border-neutral-600" // Used notches
                        : "bg-slate-700 border-2 border-slate-950" // Free notches
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-2 w-full grid grid-cols-11 gap-y-4">
          {CharmList().map((charm: Charm, index: number) => (
            <div
              key={charm.name}
              className={`${
                index === 29 || index === 9 ? "col-span-2" : "col-span-1"
              } ${index === 40 ? "col-start-11" : ""} h-20 w-20 ${
                index === 30 || index === 10 ? "col-start-2" : ""
              } rounded-full hover:cursor-pointer ${
                selectedCharms.some(
                  (selectedCharm: Charm) => selectedCharm.name === charm.name
                )
                  ? "opacity-50 shadow-lg shadow-blue-100"
                  : ""
              } ${
                OFFSET_INDEXES.includes(index)
                  ? "transform -translate-x-11"
                  : ""
              }`}
              onClick={() => handleCharmSelection(charm)}
            >
              <img src={charm.img} alt="" className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CharmSelect;

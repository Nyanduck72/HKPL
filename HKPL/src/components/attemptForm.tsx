import { useState } from "react";
import CharmSelect from "./charmSelect";

const AttemptForm = () => {
  const [pantheon, setPantheon] = useState<string>("");
  const [bindings, setBindings] = useState<string[]>([]);

  const handleBindingSelection = (binding: string) => {
    if (bindings.includes(binding)) {
      setBindings(bindings.filter((b) => b !== binding));
    } else {
      setBindings([...bindings, binding]);
    }
  };

  return (
    <>
      <div className="w-full h-full mb-32 p-4 border-2 border-neutral-500 bg-neutral-700">
        <h1 className="text-3xl text-white font-bold my-2">Pantheon</h1>
        <div className="grid grid-cols-5 gap-4 border-b-2 border-yellow-500">
          <div className="w-full h-60 mb-2 flex flex-col items-center justify-center">
            <button
              className="w-full h-full bg-white hover:scale-105 transition duration-200 ease-in-out"
              onClick={() => setPantheon("Pantheon of the Master")}
            />
            <p
              className={`text-lg ${
                pantheon === "Pantheon of the Master"
                  ? "text-yellow-500"
                  : "text-white"
              } text-center w-full mt-2`}
            >
              Pantheon of the Master
            </p>
          </div>
          <div className="w-full h-60 mb-2 flex flex-col items-center justify-center">
            <button
              className="w-full h-full bg-white hover:scale-105 transition duration-200 ease-in-out"
              onClick={() => setPantheon("Pantheon of the Artist")}
            />
            <p
              className={`text-lg ${
                pantheon === "Pantheon of the Artist"
                  ? "text-yellow-500"
                  : "text-white"
              } text-center w-full mt-2`}
            >
              Pantheon of the Artist
            </p>
          </div>
          <div className="w-full h-60 mb-2 flex flex-col items-center justify-center">
            <button
              className="w-full h-full bg-white hover:scale-105 transition duration-200 ease-in-out"
              onClick={() => setPantheon("Pantheon of the Sage")}
            />
            <p
              className={`text-lg ${
                pantheon === "Pantheon of the Sage"
                  ? "text-yellow-500"
                  : "text-white"
              } text-center w-full mt-2`}
            >
              Pantheon of the Sage
            </p>
          </div>
          <div className="w-full h-60 mb-2 flex flex-col items-center justify-center">
            <button
              className="w-full h-full bg-white hover:scale-105 transition duration-200 ease-in-out"
              onClick={() => setPantheon("Pantheon of the Knight")}
            />
            <p
              className={`text-lg ${
                pantheon === "Pantheon of the Knight"
                  ? "text-yellow-500"
                  : "text-white"
              } text-center w-full mt-2`}
            >
              Pantheon of the Knight
            </p>
          </div>
          <div className="w-full h-60 mb-2 flex flex-col items-center justify-center">
            <button
              className="w-full h-full bg-white hover:scale-105 transition duration-200 ease-in-out"
              onClick={() => setPantheon("Pantheon of Hallownest")}
            />
            <p
              className={`text-lg ${
                pantheon === "Pantheon of Hallownest"
                  ? "text-yellow-500"
                  : "text-white"
              } text-center w-full mt-2`}
            >
              Pantheon of Hallownest
            </p>
          </div>
        </div>
        <div className="w-full mt-6">
          <h1 className="text-3xl text-white font-bold my-2">Bindings</h1>
          <div className="grid grid-cols-4 gap-4 border-b-2 border-yellow-500">
            <div className="w-full h-60 mb-2 flex flex-col items-center justify-center">
              <button
                className="w-full h-full bg-white hover:scale-105 transition duration-200 ease-in-out"
                onClick={() => handleBindingSelection("Shell")}
              />
              <p
                className={`text-lg ${
                  bindings.includes("Shell") ? "text-yellow-500" : "text-white"
                } text-center w-full mt-2`}
              >
                Shell
              </p>
            </div>
            <div className="w-full h-60 mb-2 flex flex-col items-center justify-center">
              <button
                className="w-full h-full bg-white hover:scale-105 transition duration-200 ease-in-out"
                onClick={() => handleBindingSelection("Soul")}
              />
              <p
                className={`text-lg ${
                  bindings.includes("Soul") ? "text-yellow-500" : "text-white"
                } text-center w-full mt-2`}
              >
                Soul
              </p>
            </div>
            <div className="w-full h-60 mb-2 flex flex-col items-center justify-center">
              <button
                className="w-full h-full bg-white hover:scale-105 transition duration-200 ease-in-out"
                onClick={() => handleBindingSelection("Nail")}
              />
              <p
                className={`text-lg ${
                  bindings.includes("Nail") ? "text-yellow-500" : "text-white"
                } text-center w-full mt-2`}
              >
                Nail
              </p>
            </div>
            <div className="w-full h-60 mb-2 flex flex-col items-center justify-center">
              <button
                className="w-full h-full bg-white hover:scale-105 transition duration-200 ease-in-out"
                onClick={() => handleBindingSelection("Charms")}
              />
              <p
                className={`text-lg ${
                  bindings.includes("Charms") ? "text-yellow-500" : "text-white"
                } text-center w-full mt-2`}
              >
                Charm
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <CharmSelect />
        </div>
      </div>
    </>
  );
};

export default AttemptForm;

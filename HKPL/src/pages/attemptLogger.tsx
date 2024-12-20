import React from "react";
import AttemptForm from "../components/attemptForm";

const AttemptLogger = () => {
  return (
    <>
      <div className="h-screen w-screen pl-64 overflow-x-hidden">
        <div className="title-area items-center justify-center h-16 p-4 border-b-2 border-b-neutral-950/50 flex">
          <h1 className="text-2xl text-center font-bold text-neutral-950">
            Create an Attempt Log
          </h1>
        </div>
        <div className="my-4 pl-4 pr-2 w-full items-center justify-center">
          <AttemptForm />
        </div>
      </div>
    </>
  );
};

export default AttemptLogger;

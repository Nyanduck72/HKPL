import { Pantheon } from "../types/pantheon";
import { Room } from "../types/room";
import { Boss } from "../types/boss";
import { useState } from "react";
import "../css/roomSlider.css";

interface IProps {
  pantheon: Pantheon;
  onRoomSelect: (roomNumber: number) => void;
}

const RoomList = ({ pantheon, onRoomSelect }: IProps) => {
  const [value, setValue] = useState<number>(pantheon.roomsInPantheon.length);
  const handleMaxRoomReached = (roomNumber: number) => {
    setValue(roomNumber);
    onRoomSelect(roomNumber);
  };

  const handleFloatingTagPosition = (value: number) => {
    const possiblePositions: number[] = [
      1.8, 10.8, 19.7, 28.7, 37.5, 46.3, 55.1, 64, 72.9, 81.8, 90.5, 99.5,
    ];
    if (pantheon.roomsInPantheon.length > 12) {
      return (value * 100) / pantheon.roomsInPantheon.length;
    } else {
      return possiblePositions[value - 1];
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl text-white font-bold">Rooms</h1>
      <div className="grid grid-cols-12 mt-20 mb-2 gap-2">
        <div className="col-span-12 relative flex items-center justify-center h-12">
          <input
            type="range"
            name="roomReached"
            min="1"
            max={pantheon.roomsInPantheon.length}
            id="roomReached"
            className="w-full appearance-none roomSlider"
            onChange={(e) => handleMaxRoomReached(e.target.valueAsNumber)}
          />
          <div
            className={`
    absolute top-0 left-0 h-16 w-16 rounded-full bg-white shadow-inner shadow-black border-4 border-yellow-600 transform -translate-x-10 -translate-y-full z-[99]
  `}
            style={{ marginLeft: `${handleFloatingTagPosition(value)}%` }}
          >
            <div className="flex items-center justify-center h-full">
              <img
                src={`${pantheon.roomsInPantheon[value - 1].imgSrc ? pantheon.roomsInPantheon[value - 1].imgSrc : ""}`}
                alt=""
                className="select-none"
              />
            </div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full w-4 h-4 -rotate-45  border-l-4 border-l-yellow-600 border-r-4 border-r-transparent border-t-4 border-b-4 border-b-yellow-600 border-t-transparent"></div>
          </div>
        </div>
        {pantheon.roomsInPantheon.map((room: Room, index: number) => {
          return (
            <>
              <div className="col-span-1 flex items-center justify-center border-r-2 border-white">
                <h1
                  className={`text-lg ${
                    index < value ? "text-yellow-500" : "text-white"
                  } font-bold`}
                >
                  {room.roomNumber}
                </h1>
              </div>
              <div className="col-span-1 flex items-center   border-r-2 border-white">
                <img
                  src={room.imgSrc}
                  alt={
                    room.roomType === "Lore" || room.roomType === "Rest"
                      ? room.roomType
                      : (room.roomType as Boss).name + " "
                  }
                  className="w-20"
                />
              </div>
              <div className="col-span-3 flex items-center">
                <h1
                  className={`text-lg ml-4 ${
                    index < value ? "text-yellow-500" : "text-white"
                  } font-bold`}
                >
                  {room.roomType === "Lore" || room.roomType === "Rest"
                    ? room.roomType
                    : (room.roomType as Boss).name}
                </h1>
              </div>
              <div className="col-span-7"></div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RoomList;

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
      3, 10.8, 19.6, 28.7, 37.5, 46.3, 55.1, 63.9, 72.7, 81.5, 90.3, 98.7,
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
            className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-yellow-600 bg-white transform -translate-x-10 -translate-y-full"
            style={{ marginLeft: `${handleFloatingTagPosition(value)}%` }}
          >
            <div className="flex items-center justify-center h-full">
              <h1 className="text-lg text-black">
                {pantheon.roomsInPantheon[value - 1].imgSrc ?? value}
              </h1>
            </div>
          </div>
        </div>
        {pantheon.roomsInPantheon.map((room: Room, index: number) => {
          return (
            <>
              <div className="col-span-2 flex items-center justify-center">
                <h1
                  className={`text-lg ${
                    index <= value ? "text-yellow-500" : "text-white"
                  } font-bold`}
                >
                  {room.roomNumber}
                </h1>
              </div>
              <div className="col-span-2">
                <img src={room.imgSrc} alt="" />
              </div>
              <div className="col-span-6">
                <h1 className="text-lg text-white">
                  {room.roomType === "Lore" || room.roomType === "Rest"
                    ? room.roomType
                    : (room.roomType as Boss).name}
                </h1>
              </div>
              <div className="col-span-2">
                <img src={room.imgSrc} alt={room.roomType === "Lore" || room.roomType === "Rest" ? room.roomType : (room.roomType as Boss).name + " " } />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RoomList;

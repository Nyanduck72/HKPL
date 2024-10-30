import { Pantheon } from "../types/pantheon";
import { Room } from "../types/room";
import { Boss } from "../types/boss";

interface IProps {
  pantheon: Pantheon;
  onRoomSelect: (roomNumber: number) => void;
}

const RoomList = ({ pantheon, onRoomSelect }: IProps) => {
  const handleMaxRoomReached = (roomNumber: number) => {
    onRoomSelect(roomNumber);
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl text-white font-bold">Rooms</h1>
      <div className="grid grid-cols-12 mt-6 mb-2 gap-2">
        <div className="col-span-12 flex items-center justify-center">
          <input
            type="range"
            name="roomReached"
            min="1"
            max={pantheon.roomsInPantheon.length}
            id="roomReached"
            className="w-full"
            onChange={(e) => handleMaxRoomReached(e.target.valueAsNumber)}
          />
        </div>
        {pantheon.roomsInPantheon.map((room: Room) => {
          return (
            <>
              <div className="col-span-2 flex items-center justify-center">
                <h1 className="text-lg text-white">{room.roomNumber}</h1>
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
              <div className="col-span-2"></div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RoomList;

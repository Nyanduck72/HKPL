import { Boss } from "./boss";

export type Room = {
    roomNumber: number;
    roomType: Boss | "Rest" | "Lore"
    imgSrc?: string;
}
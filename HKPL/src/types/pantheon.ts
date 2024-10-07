import { Room } from './room';

export type Pantheon = {
    name: string;
    attempts: number;
    completedAttempts: number;
    roomsInPantheon: Room[];
    bindings: string[];
}
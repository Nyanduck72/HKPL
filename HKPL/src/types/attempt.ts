import { Charm } from './charm';

export type Attempt = {
    _id: string;
    pantheon: string;
    roomNumber: number;
    charmBuild: Charm[];
}
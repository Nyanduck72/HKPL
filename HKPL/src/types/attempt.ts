import { Charm } from './charm';

export type Attempt = {
    id: string;
    pantheon: string;
    roomNumber: number;
    charmBuild: Charm[];
}
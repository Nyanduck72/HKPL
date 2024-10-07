import { create } from "zustand";
import { Charm } from "../types/charm";

interface CharmBuildStore {
  charms: Charm[];
  setCharms: (charms: Charm[]) => void;
}

export const useCharmBuildStore = create<CharmBuildStore>((set) => ({
  charms: [],
  setCharms: (charms: Charm[]) => set({ charms: charms }),
}));

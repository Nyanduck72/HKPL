import mongoose, { Document, Schema } from "mongoose";
import { Charm } from "./charm";
export interface IAttempt extends Document {
  pantheon: string;
  roomNumber: number;
  charmBuild: Charm[];
  bindings: string[];
}
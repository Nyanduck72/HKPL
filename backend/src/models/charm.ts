import mongoose, { Schema, Document } from 'mongoose';

export interface Charm extends Document {
  name: string;
  notchCost: number;
  img: string;
}

const CharmSchema: Schema = new Schema({
  name: { type: String, required: true },
  notchCost: { type: Number, required: true },
  img: { type: String, required: false },
}, { collection: 'Charms' });

export default mongoose.model<Charm>('Charm', CharmSchema);

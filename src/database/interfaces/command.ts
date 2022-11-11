import { Document } from 'mongoose';

export interface CommandTypeDoc {
  name: string;
  description: string;
  isAvailable: boolean;
}

export interface iCommand extends Document<unknown, unknown, CommandTypeDoc> {
  name: string;
  description: string;
  isAvailable: boolean;
}

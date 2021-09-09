import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
 
export type ReservationDocument = Reservation & Document;
 
@Schema()
export class Reservation {
  @Prop()
  user_id: string;
 
  @Prop()
  user_name: string;
 
  @Prop()
  concert_id: string;
 
  @Prop()
  concert_title: string;
 
}
 
export const ReservationSchema = SchemaFactory.createForClass(Reservation);
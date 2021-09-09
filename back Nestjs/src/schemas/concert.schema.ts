import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
 
export type ConcertDocument = Concert & Document;
 
@Schema()
export class Concert {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  artist: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  price: string;
 
  @Prop({ required: true })
  genre: string;
 
  @Prop({ required: true })
  description: string;
 
  @Prop({ required: true})
  picture: string;
 
}
 
export const ConcertSchema = SchemaFactory.createForClass(Concert);
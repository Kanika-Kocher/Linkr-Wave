import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';
import { Url } from 'url';

@Schema()
export class User extends Document {
  @Prop()
  fullName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  password: string;
  
  @Prop()
  resetToken: string;

  @Prop({ type: Date })
  resetTokenExpiry: Date;
}

@Schema()
export class Contact extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  photo: string;

  @Prop()
  linkedinUrl: string;

  @Prop()
  country: string;

  @Prop()
  company: string;

  @Prop([String])
  tags: string[];

  @Prop({ unique: true })
  customId: string;

  @Prop()
  jobTitle: string;

  @Prop({ required: true })
  mobile: string;

  @Prop()
  industry: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
export const UserSchema = SchemaFactory.createForClass(User);

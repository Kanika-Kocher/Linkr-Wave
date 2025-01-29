import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema,  Contact, ContactSchema} from './user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema:UserSchema },
      { name: Contact.name, schema: ContactSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}


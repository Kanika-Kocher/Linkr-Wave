import { Controller, Post, Body, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { AddContactDto, CreateUserDto, LoginUserDto, ResetPasswordDto } from './dto/create-user.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('Create')
  @ApiBody({ type: CreateUserDto })
  async Create(@Body() CreateUserDto: CreateUserDto) {
    console.log(CreateUserDto);
    return this.userService.createUser(CreateUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
  return this.userService.loginUser(loginUserDto);
 }

  @Post('request-password-reset')
  @ApiBody({type: CreateUserDto})
  async requestPasswordReset(@Body() email:CreateUserDto) {
   return this.userService.requestPasswordReset('email');
 }

  @Post('reset-password')
  @ApiBody({type : ResetPasswordDto})
  async resetPassword(@Body() resetPasswordDto: { token: string, newPassword: string }) {
    return this.userService.resetPassword(resetPasswordDto.token, resetPasswordDto.newPassword);
  }

  @Post('AddContact')
  async AddContact(@Body() addContactDto: AddContactDto,
  ) {
    console.log(addContactDto);
    return this.userService.addContact(addContactDto);
  }
}


 

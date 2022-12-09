import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common'
import { UsersService } from './users.service'
import { Prisma } from '@prisma/client'
import { Role } from '../auth/role.enum'
import { Roles } from '../auth/role.decorator'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  create(@Body() data: Prisma.UserCreateInput) {
    return this.usersService.create(data)
  }

  @Get()
  @Roles(Role.Admin)
  findAll() {
    return this.usersService.findAll()
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param() data: { id: string }) {
    return this.usersService.remove(+data.id)
  }
}

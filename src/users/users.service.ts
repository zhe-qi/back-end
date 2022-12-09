import { Injectable } from '@nestjs/common'
import { PrismaService } from '../npx/prisma/prisma.service'
import { User, Prisma } from '@prisma/client'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const flag = await this.prisma.user.findUnique({
      where: { username: data.username }
    })
    if (flag) return null
    return this.prisma.user.create({
      data
    })
  }

  remove(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id }
    })
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  findOne(username: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { username }
    })
  }
}

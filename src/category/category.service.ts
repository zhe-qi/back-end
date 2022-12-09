import { Injectable } from '@nestjs/common'
import { Prisma, Category } from '@prisma/client'
import { PrismaService } from '../npx/prisma/prisma.service'

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(data?: Prisma.CategoryCreateInput): Promise<Category> {
    const flag = await this.prisma.category.findUnique({
      where: { name: data.name }
    })
    if (flag) return null
    return this.prisma.category.create({
      data
    })
  }

  async findQuestion(id: number): Promise<Category> {
    const data = await this.prisma.category.findUnique({
      where: { id },
      include: {
        questions: true
      }
    })
    return data
  }

  findAll(): Promise<Category[]> {
    return this.prisma.category.findMany()
  }

  update(id: number, name: string): Promise<Category> {
    return this.prisma.category.update({
      where: { id: Number(id) },
      data: {
        name
      }
    })
  }

  remove(id: number): Promise<Category> {
    return this.prisma.category.delete({
      where: { id }
    })
  }
}

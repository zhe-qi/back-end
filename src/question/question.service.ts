import { Injectable } from '@nestjs/common'
import { PrismaService } from '../npx/prisma/prisma.service'
import { Prisma, Question } from '@prisma/client'

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.QuestionCreateInput): Promise<Question> {
    return this.prisma.question.create({
      data
    })
  }

  findAll(categoryId: number): Promise<Question[]> {
    return this.prisma.question.findMany({
      where: {
        categoryId
      }
    })
  }

  delete(id: number): Promise<Question> {
    return this.prisma.question.delete({
      where: { id }
    })
  }

  async findQuestion(type: string, num: number): Promise<Question[]> {
    const flag = await this.prisma.category.findUnique({
      where: { name: type }
    })
    const data = await this.prisma.question.findMany({
      where: { categoryId: flag.id },
      take: num
    })
    return data
  }
}

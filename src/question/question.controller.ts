import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common'
import { QuestionService } from './question.service'
import { Question, Prisma } from '@prisma/client'
import { Role } from '../auth/role.enum'
import { Roles } from '../auth/role.decorator'

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  // 创建题目
  @Post()
  @Roles(Role.Admin)
  create(@Body() data?: Prisma.QuestionCreateInput): Promise<Question> {
    return this.questionService.create(data)
  }

  @Get(':categoryId')
  @Roles(Role.Admin)
  findAll(@Param() categoryId: number): Promise<Question[]> {
    return this.questionService.findAll(categoryId)
  }

  @Delete(':id')
  @Roles(Role.Admin)
  delete(@Param() data: { id: string }): Promise<Question> {
    return this.questionService.delete(+data.id)
  }

  @Get(':type/:num')
  @Roles(Role.Admin)
  findQuestion(
    @Param() data: { type: string; num: string }
  ): Promise<Question[]> {
    return this.questionService.findQuestion(data.type, +data.num)
  }
}

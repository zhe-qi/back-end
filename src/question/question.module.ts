import { Module } from '@nestjs/common'
import { QuestionService } from './question.service'
import { QuestionController } from './question.controller'
import { PrismaModule } from '../npx/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [QuestionController],
  providers: [QuestionService]
})
export class QuestionModule {}

import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './npx/prisma/prisma.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { CategoryModule } from './category/category.module'
import { QuestionModule } from './question/question.module'

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    CategoryModule,
    QuestionModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

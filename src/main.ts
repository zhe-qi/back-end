import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { HttpExceptionFilter } from './common/filters/filters.filter'
import { TransformInterceptor } from './common/interceptor/interceptor.interceptor'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true
  })

  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Project API description')
    .setVersion('0.1')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new TransformInterceptor())
  await app.listen(3000)
}
bootstrap()

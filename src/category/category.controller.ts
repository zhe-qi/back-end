import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common'
import { CategoryService } from './category.service'
import { Prisma, Category } from '@prisma/client'
import { Role } from '../auth/role.enum'
import { Roles } from '../auth/role.decorator'

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  // 创建题库
  @Post()
  @Roles(Role.Admin)
  create(@Body() data: Prisma.CategoryCreateInput): Promise<Category> {
    return this.categoryService.create(data)
  }

  @Get()
  @Roles(Role.Admin)
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll()
  }

  @Get(':id')
  @Roles(Role.Admin)
  findQuestion(@Param() data: { id: string }): Promise<Category> {
    return this.categoryService.findQuestion(+data.id)
  }

  @Put(':id/:name')
  @Roles(Role.Admin)
  update(@Param() data: { id: number; name: string }): Promise<Category> {
    return this.categoryService.update(+data.id, data.name)
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param() data: { id: string }): Promise<Category> {
    return this.categoryService.remove(+data.id)
  }
}

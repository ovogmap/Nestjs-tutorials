import { Controller, Get, Post } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return '나는 고양이';
  }

  @Get()
  findAll(): string {
    return '나는 삼색이!';
  }
}

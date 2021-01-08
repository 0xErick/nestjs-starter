import { Controller, Get, Post, Put } from '@nestjs/common';
import { CatService } from './cat.service';
@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}
  @Get()
  findAll(): Promise<any> {
    // return 'This action returns all cats';
    return this.catService.findAll();
  }

  @Post()
  create() {
    this.catService.create({
      name: 'cat',
      age: 12,
      breed: '啥',
    });
  }

  @Put()
  update() {
    this.catService.updateById('5ff6f0ac562813740f8e51e1', {
      name: '达到2 bfffourne',
    });
  }
}

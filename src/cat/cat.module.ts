import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from '../schemas/cat.schema';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Cat.name, schema: CatSchema }],
      'mongodb_1',
    ),
  ],
  controllers: [CatController],
  providers: [CatService, CatService],
})
export class CatModule {}

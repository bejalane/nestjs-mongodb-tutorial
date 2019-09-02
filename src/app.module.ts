import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';

import config from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), ItemsModule],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule {}

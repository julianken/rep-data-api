import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepresentativeLoaderModule } from './representative-loader/representative-loader.module';

@Module({
  imports: [RepresentativeLoaderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

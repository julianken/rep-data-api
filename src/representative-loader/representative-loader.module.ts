import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RepresentativeLoaderService } from './representative-loader.service';
import { config } from '../config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    })
  ],
  providers: [RepresentativeLoaderService]
})
export class RepresentativeLoaderModule {}

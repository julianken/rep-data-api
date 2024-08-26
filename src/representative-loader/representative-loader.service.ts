import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RepresentativeLoaderService {
    constructor(
        private configService: ConfigService
    ) {
        this.configService = configService;
    }
}

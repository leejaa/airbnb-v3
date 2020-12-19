import { Module } from '@nestjs/common';
import { RoomsResolver } from './rooms.reslover';

@Module({
    providers: [RoomsResolver]
})
export class RoomsModule {}

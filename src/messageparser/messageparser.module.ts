import { Module } from '@nestjs/common';
import { MessageParserController } from './messageparser.controller';
import { MessageParserService } from './messageparser.service';

@Module({
  imports: [],
  controllers: [MessageParserController],
  providers: [MessageParserService],
})
export class MessageParserModule {}
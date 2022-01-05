import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageParserModule } from './messageparser/messageparser.module';

@Module({
  imports: [MessageParserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

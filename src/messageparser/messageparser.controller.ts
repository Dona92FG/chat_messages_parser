import {
    Controller,
    Post,
    Body,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { JsonChatMessageDto } from './dto/json-chat-message.dto';
import { MessageParserService } from './messageparser.service';

  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
      transform: true,
    }),
  )

  @Controller('messageParser')
  export class MessageParserController {
    constructor(private readonly service: MessageParserService) {}
    @Post()
    async parseChatMessages(
      @Body() chatMessages: string[],
    ): Promise<JsonChatMessageDto[]> {

      /*console.log((chatMessages[0].match(/\./g)).length)

      console.log(chatMessages[0].split(".", 5))

      console.log(typeof chatMessage === "string");

      return [];*/

      return this.service.parseChatMessages(chatMessages);

    }
  }
  
import {
    Injectable,
  } from '@nestjs/common';
import { JsonChatMessageDto } from './dto/json-chat-message.dto';


@Injectable()
export class MessageParserService {

    parseChatMessages(chatMessages: string[]): JsonChatMessageDto[] {

        let parsedChatMessages: JsonChatMessageDto[] = [];

        chatMessages.forEach( chatMessage => {
            const chatMessageChecked = this.chechSingleChatMessage(chatMessage);

            if(typeof chatMessageChecked !== "string"){

                chatMessageChecked.forEach(message => {
                    const chatMessageParsed = this.parseChatMessage(message);
                    parsedChatMessages.push(chatMessageParsed);
                });

            } else {
                const chatMessageParsed = this.parseChatMessage(chatMessage);
                parsedChatMessages.push(chatMessageParsed);
            }
            
        })

        return parsedChatMessages;
    }

    parseChatMessage(chatMessage: string): JsonChatMessageDto {

        const chatMessageSplitted = chatMessage.split(" : ");
        const firstPartChatMessage = chatMessageSplitted[0].split(" ");

        const userType = this.getUserType(firstPartChatMessage);
        const messageDate = this.getChatMessageDate(firstPartChatMessage);
        const messageMention = this.getChatMessageMention(chatMessageSplitted);
        const messageSentence = this.getChatMessageSentence(chatMessageSplitted);

        return {
            date: messageDate,
            mention: messageMention,
            sentence: messageSentence,
            type: userType
        };
    }

    getUserType(messageSplitted: string[]): string {

        let userTypeString = "";

        if (messageSplitted.length == 2) {
            userTypeString = messageSplitted[1];
        }

        if (messageSplitted.length > 2) {
            messageSplitted.forEach((message, index) => {
                if(index != 0) userTypeString = userTypeString + " " + message + "";
            })
        }

        return userTypeString;

    }

    getChatMessageDate(messageSplitted: string[]): string {

        return messageSplitted[0].split(" ")[0];

    }

    getChatMessageMention(mainMessageSplitted: string[]): string {

        return mainMessageSplitted[0];

    }

    getChatMessageSentence(mainMessageSplitted: string[]): string {

        return mainMessageSplitted[1];

    }

    chechSingleChatMessage(chatMessage: string): any {

        const chatMessageLength = ((chatMessage.match(/\./g)).length);
        
        if(chatMessageLength > 1) {
            const chatMessages = chatMessage.split(".", chatMessageLength);
            return chatMessages;
        }

        return chatMessage;

    }

}
  
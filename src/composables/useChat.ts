import type { ChatMessage } from '@/interfaces/Chat-message.interface';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const onNewMessage = (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });
  };

  return {
    //Propertys
    messages,

    //Methods
    onNewMessage,
  };
};

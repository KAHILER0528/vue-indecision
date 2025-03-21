import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/Chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getHerResponse = async () => {
    const response = await fetch('https://yesno.wtf/api');
    const data = (await response.json()) as YesNoResponse;

    return data;
  };

  const onNewMessage = async (text: string) => {
    if (text.length === 0) return;

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    //Evaluar si el mensaje termina en '?' para responder con un mensaje aleatorio
    if (!text.endsWith('?')) return;

    await sleep(1.5);

    const { answer, image } = await getHerResponse();

    messages.value.push({
      id: new Date().getTime() + 1,
      itsMine: false,
      message: answer,
      image,
    });
  };

  return {
    //Propertys
    messages,

    //Methods
    onNewMessage,
  };
};

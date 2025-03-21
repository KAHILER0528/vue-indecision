<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!--Chat Mesages-->
    <ChatMessages :messages="messages" />

    <!--Mesages Box-->
    <!--<MessagesBox v-on:send-message="onNewMessage($event)" />-->

    <!--Forma Corta-->
    <MessagesBox @send-message="onNewMessage" />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessagesBox from '@/components/chat/MessagesBox.vue';
import type { ChatMessage } from '@/interfaces/Chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  { id: new Date().getTime(), message: 'Hola Mundo!!!, ¿Cómo estás?', itsMine: true },
  {
    id: new Date().getTime(),
    message: 'Hola, ¿Si estoy bien?',
    itsMine: false,
    image: 'https://yesno.wtf/assets/yes/11-a23cbde4ae018bbda812d2d8b2b8fc6c.gif',
  },
]);

const onNewMessage = (text: string) => {
  messages.value.push({
    id: new Date().getTime(),
    itsMine: true,
    message: text,
  });
};
</script>

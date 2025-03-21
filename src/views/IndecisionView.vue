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
import { useChat } from '@/composables/useChat';

const { messages, onNewMessage } = useChat();
</script>

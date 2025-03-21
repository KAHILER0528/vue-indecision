<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble v-for="msg in messages" :key="msg.id" v-bind="msg" />

      <!-- Forma Larga
        :its-mine="msg.itsMine"
        :message="msg.message"
        :image="msg.image"
       -->
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubble from '@/components/chat/ChatBubble.vue';
import type { ChatMessage } from '@/interfaces/Chat-message.interface';

interface Props {
  messages: ChatMessage[];
}

defineProps<Props>();
</script>

<template>
  <section>
    <h3>Couter: {{ counter }}</h3>
    <h3>Squere: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props {
  value: number;
}
const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.value);

/* Se pasa al composables
import { computed, ref } from 'vue';
*/

/*const props = defineProps({
  value: { type: Number, required: true },
});*/

// Otra manera
/*const props = defineProps<{
  value: number;
}>();*/

// Otra manera 2 numero opcional ?
/* Se ultiliza luego clase 48
interface Props {
  value: number;
}
const props = defineProps<Props>();
*/

/* Se pasa al composables
const counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value);
*/
</script>

<style scoped>
.btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}
</style>

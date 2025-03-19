import { ref, computed } from 'vue';

//const counter = ref(10);

export const useCounter = (inicialValue: number = 5) => {
  const counter = ref(inicialValue);
  //const squareCounter = computed(() => counter.value * counter.value);

  return {
    counter,

    // Read-only
    squareCounter: computed(() => counter.value * counter.value),
  };
};

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserInfoStore = defineStore('counter', () => {
    const name = ref<string>('Douglas')
    const groups = ref<string[]>(['Admin', 'teste'])
    const vendas = ref<number>(0)

    const comissao = computed<number>(() => vendas.value * 3)

    function increment() {
        vendas.value++
    }

    return { name, groups, vendas, comissao, increment }
})
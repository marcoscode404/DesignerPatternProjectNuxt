<script setup>
import { ref } from 'vue'
import {
    Dialog, DialogPanel, DialogTitle,
} from '@headlessui/vue'

const isLoad = ref(false)
function setIsLoad(value) {
    isLoad.value = value
}

const isOpen = ref(true)
function setIsOpen(value) {
    isOpen.value = value
}
</script>

<template>
    <Dialog :open="isOpen" @close="setIsOpen" class="max-h-screen">
        <DialogPanel class=" w-1/3 h-96 m-auto rounded-lg  border-dashed border-2 border-gray-400 shadow-xl">

            <div class="flex justify-end p-1">
                <button @click="setIsOpen(false)" class="bg-red-500 px-6 py-1 rounded-lg text-white">
                    <Icon name="ph:x-bold" />
                </button>
            </div>

            <DialogTitle class="flex justify-center items-center h-56 font-normal">
                Deseja Iniciar Recebimento?
            </DialogTitle>

            <div class="flex justify-center gap-2 font-semibold">
                <button @click="setIsOpen(false)" class="p-2  rounded-lg bg-red-500  text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 
                                focus:ring-opacity-75">Cancelar</button>
                <button @click="setIsLoad(true)" class="p-2 px-6 rounded-lg shadow-md bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 
                                focus:ring-opacity-75">
                    <span v-if="isLoad === false">Sim</span>
                    <span v-else>
                        <Icon name="svg-spinners:3-dots-bounce" />
                    </span>
                </button>
            </div>

        </DialogPanel>
    </Dialog>

    <!-- abre a modal -->
    <button @click="setIsOpen(true)" type="button" class="
                                m-auto
                                w-28 decoration-dashed py-1 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                              hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
                                focus:ring-opacity-75">
        Modal
    </button>
</template>

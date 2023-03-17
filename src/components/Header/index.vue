<script setup>
import { Dialog, DialogPanel } from '@headlessui/vue';

const styleIcon = 'h-6 w-6 text-red-600';

const isOpen = ref(false)
function setIsOpenDropdown(value) {
    isOpen.value = value
}

</script>

<template>
    <div class="h-14 mb-10 mt-20 bg-gradient-to-r text-lg rounded-br-lg rounded-bl-lg
                        text-red-500 p-10 px-10 border border-gray-300 shadow-md 
                        shadow-gray-400 drop-shadow-xl flex items-center justify-between">

        <!-- img -->
        <img src="../../assets/logoHeader.svg" alt="Modena e Silva">

        <button @click="setIsOpenDropdown(true)" id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
            class="border-2 border-green-800 bg-green-600  flex items-center justify-center h-9 w-9 p-1 rounded-full">
            <!-- <Icon name="mingcute:user-3-fill">Avatar</Icon> -->

            <div
                class="relative inline-flex items-center justify-center w-full overflow-hidden rounded-full
                                                                                                                dark:bg-gray-600">
                <span class="font-medium text-white dark:text-gray-300">D</span>
            </div>
        </button>
    </div>

    <!-- Dropdown menu -->
    <Dialog :open="isOpen" @close="setIsOpenDropdown" id="dropdown"
        class=" container z-10 divide-gray-100 px-2 rounded-lg m-auto -mt-9">

        <DialogPanel class="w-2/3 h-full m-auto rounded-lg  border-2 border-gray-200 shadow-xl">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <button class="w-full flex justify-center gap-2 px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600
                                         dark:hover:text-white text-base cursor-pointer border-b-2">
                    <Icon name="material-symbols:logout-rounded" :class="styleIcon" />
                    Logout
                </button>

                <button class="w-full flex justify-center gap-3 px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600
                                                border-b-2 dark:hover:text-white text-base cursor-pointer">
                    <Icon name="mdi:close" :class="styleIcon" />
                    Fechar
                </button>

                <li class="px-4 py-4 flex justify-center text-base">Versão 1.0.0</li>
            </ul>
        </DialogPanel>
    </Dialog>
</template>

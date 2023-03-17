<script setup>
import { ref } from 'vue'
const frutas = [
    { name: 'Batata' },
    { name: 'Maracujá' },
    { name: 'Manga' },
    { name: 'Kiwi' },
    { name: 'Acerola' },
]
const selectedPerson = ref(frutas[0])
</script>

<template>
    <main class="container p-2 mx-auto flex justify-center ali flex-col">
        <div class="flex justify-center">
            Select
        </div>

        <NuxtLink to="/"
            class="w-28 decoration-dashed py-1 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                                                    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            <Icon name="ph:arrow-circle-left" />
            Voltar
        </NuxtLink>


        <div class="w-2/3 m-auto mt-20 bg-orange-500 p-5 rounded-xl">
            <HeadlessListbox v-model="selectedPerson">
                <div class="relative mt-1">
                    <HeadlessListboxButton class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left 
                            shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2
                             focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 
                             focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span class="block truncate">{{ selectedPerson.name }}</span>

                        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <Icon name="ph:circle-wavy-check" class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </HeadlessListboxButton>

                    <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                        leave-to-class="opacity-0">
                        <HeadlessListboxOptions class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md 
                        bg-white py-1 text-base shadow-lg ring-1
                             ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            <HeadlessListboxOption v-for="fruta in frutas" v-slot="{ active, selected }" :key="fruta.name"
                                :value="fruta" as="template">
                                <li :class="[
                                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                    'relative cursor-default select-none py-2 pl-10 pr-4',
                                ]">
                                    <span :class="[
                                        selected ? 'font-medium' : 'font-normal',
                                        'block truncate',
                                    ]">{{ fruta.name }}</span>
                                    <span v-if="selected"
                                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <Icon name="ph:circle-wavy-check" class="h-5 w-5" aria-hidden="true" />
                                    </span>
                                </li>
                            </HeadlessListboxOption>
                        </HeadlessListboxOptions>
                    </transition>
                </div>
            </HeadlessListbox>
        </div>
    </main>
</template>
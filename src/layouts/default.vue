<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>

<template>
    <div class="tw-w-screen">
        <div class="h-14 mb-10 bg-gradient-to-r text-lg  text-cyan-50 p-3 from-teal-700 to-teal-800 flex items-center">
            <header class="container mx-auto font-bold flex text-center justify-between">
                <div>
                    <Icon name="line-md:coffee-twotone-loop" />
                    Designer Pattern
                </div>

                <Popover class="relative">
                    <PopoverButton class="bg-white rounded-full ">
                        <Icon name="ph:user-circle-gear" class="h-8 w-8 text-emerald-700" />
                        <span class="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 
                                        bg-teal-600 border-2 border-white dark:border-gray-800 rounded-full">
                        </span>
                    </PopoverButton>

                    <PopoverPanel class="absolute z-10 text-teal-600 text-base rounded-lg border
                                      bg-white mr-96 shadow-md 
                                    border-gray-200 w-40 p-5">

                        <div class="flex flex-col">
                            <a href="#">Versão 0.0.1</a>
                        </div>

                        <div class="flex flex-col">
                            <a href="#">Sair</a>
                        </div>
                    </PopoverPanel>
                </Popover>
            </header>
        </div>

        <!-- slot -->
        <slot></slot>
    </div>
</template>

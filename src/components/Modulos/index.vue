<script setup></script>

<template>
    <main class="mt-32 h-full py-20">

        <div class="grid grid-cols-2 gap-4">
            <button class="flex flex-col gap-5 justify-center items-center 
                                 bg-red-200 text-red-700 h-40 font-medium  rounded-md shadow-md drop-shadow-md hover:drop-shadow-xl">
                <Icon name="mingcute:location-2-fill" class="h-7 w-7" />
                Endereçamento
            </button>

            <button class=" gap-5
                            flex flex-col justify-center items-center 
                            bg-green-300 text-green-800 h-40 font-medium  rounded-md shadow-md drop-shadow-md hover:drop-shadow-xl">
                <Icon name="ph:shopping-cart-fill" class="h-7 w-7" />
                Separação
            </button>

            <button class="col-span-2 gap-5 flex flex-col justify-center items-center 
                         bg-blue-200 text-blue-800 font-medium  h-40 rounded-md drop-shadow-md shadow-md hover:drop-shadow-xl">
                <Icon name="ph:storefront" class="h-7 w-7" />
                Armazenamento
            </button>
        </div>


    </main>
</template>
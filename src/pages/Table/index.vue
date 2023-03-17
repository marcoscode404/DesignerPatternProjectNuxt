<script setup>

</script>

<template>
    <main class="container p-2 mx-auto flex justify-center ali flex-col">
        <div class="flex justify-center">
            Tabela
        </div>

        <NuxtLink to="/"
            class="w-28 decoration-dashed py-1 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                                                    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            <Icon name="ph:arrow-circle-left" />
            Voltar
        </NuxtLink>


        <div class="w-2/3 m-auto bg-purple-600 rounded-xl p-3 mt-20">
            <Table />
        </div>
    </main>
</template>
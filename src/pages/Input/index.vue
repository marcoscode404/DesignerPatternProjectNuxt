<template>
    <main class="container p-2 mx-auto flex justify-center flex-col">

        <NuxtLink to="/" class="w-28 decoration-dashed py-1 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
               hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            <Icon name="ph:arrow-circle-left" />
            Voltar
        </NuxtLink>

        <div class="text-center mb-10"><h1>Inputs (variants)</h1></div>
        
        <div class="w-2/3 m-auto bg-gray-200 p-10 pl-10 rounded-xl">
            <Input />
        </div>
    </main>
</template>

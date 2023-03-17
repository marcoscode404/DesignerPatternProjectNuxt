<script setup>

// toast
nextTick(() => {
    useNuxtApp().$toast('Seja Bem Vindo(a)!');
});

const modulos = reactive({
    data: {
        items: [
            {
                name: 'Tokens Color',
                description: 'Estrutura de Cores para Reuso (Acessar)',
                link: 'tokenscolor'
            },
            {
                name: 'Modal',
                description: 'Estrutura de Modais para Reuso (Acessar)',
                link: 'modal'
            },
            {
                name: 'Select',
                description: 'Estrutura de Select para Reuso (Acessar)',
                link: 'select'
            },
            {
                name: 'Form',
                description: 'Padrões de Formulario de Login (Acessar)',
                link: 'form'
            },
            {
                name: 'modulos',
                description: 'Estrutura De Modulos Home (Acessar)',
                link: 'modulos'
            },
            {
                name: 'Toast',
                description: 'Componentes de Módulo para Endereçamento (Acessar)',
                link: 'Toast'
            },
            {
                name: 'Header',
                description: 'Estrutura do Header (Acessar)',
                link: 'header'
            },
            {
                name: 'Table',
                description: 'Estrutura do Tabela (Acessar)',
                link: 'table'
            },
            {
                name: 'Button',
                description: 'Estrutura de Button (Acessar)',
                link: 'button'
            },
            {
                name: 'Tooltips',
                description: 'Estrutura de Tooltips (Acessar)',
                link: 'tooltips'
            },
            {
                name: 'Scrool Infinity',
                description: 'Estrutura de Scrool Infinito (Acessar)',
                link: 'scroolinfinity'
            },
            {
                name: 'Input',
                description: 'Estrutura do Input (Acessar)',
                link: 'input'
            },
            {
                name: 'Radio Button',
                description: 'Estrutura de RadioButton (Acessar)',
                link: 'radiobutton'
            }
        ],
    }
});

</script>

<template>
    <main class="container m-auto bg-white w-full h-full">
        <div class="mb-3  gap-3 grid grid-cols-1 md:grid-cols-4">
            <div v-for="(modulo, index) in modulos.data.items" :key="index">
                <NuxtLink :to="modulo.link" class="block h-32 p-6 border border-gray-200 
                                                rounded-lg shadow hover:bg-gray-100
                                                dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {{ modulo.name }}
                    </h5>

                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        {{ modulo.description }}
                    </p>
                </NuxtLink>
            </div>
        </div>
    </main>
</template>


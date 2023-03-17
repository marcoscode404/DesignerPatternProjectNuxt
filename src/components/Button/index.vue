<script setup>
const { $toast } = useNuxtApp()

nextTick(() => {
    useNuxtApp().$toast('Seja Bem Vindo(a)!');
});

const notify = () => {
    // useNuxtApp().$toast.info('Hello World.\n I am <b>Tom</b>', {
    //     autoClose: 5000,
    //     dangerouslyHTMLString: true,
    // });
    // // or
    $toast.info('Sucesso', { autoClose: 5000 });
};

const buttons = reactive({
    data: {
        items: [
            {
                name: 'Cadastrar Endereço ',
                style: 'w-full decoration-dashed py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75',
                description: 'Cadastrado Com Sucesso!'
            },
            {
                name: 'Vincular Produto',
                style: 'w-full decoration-dashed py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75',
                description: 'Vinculado Com Sucesso!'
            },
            {
                name: 'Desvincular Produto',
                style: 'w-full decoration-dashed py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75',
                description: 'Desvinculado Com Sucesso!'
            },
        ],
    }
});

</script>

<template>
    <div class="flex gap-2 flex-wrap">
        <div v-for="(button, index) in buttons.data.items" :key="index">
            <button @click="notify" :class="button.style">
                {{ button.name }}
            </button>
        </div>
    </div>
</template>

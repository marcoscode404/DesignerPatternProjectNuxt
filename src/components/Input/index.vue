<script setup>
const inputs = reactive({
    data: {
        items: [
            {
                nameLabel: 'Id',
                forLabel: 'labelId',
                placeholder: '252525',
                idInput: 'labelId',
            },
        ]
    }
})
</script>

<template>
    <div class="flex gap-2 flex-wrap">

       

        
        <div class="w-full">
            <label for="input-group-1" class="block mb-2 text-sm text-gray-900 dark:text-white">Código de Barras</label>
            <div class="relative mb-6">
                <input type="text" id="input-group-1"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                                             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                                               dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="134566478971231" required>
                <button class="absolute right-2 inset-y-0  flex items-center pl-3">
                    <Icon name="ri:checkbox-multiple-blank-line" class="text-gray-400" />
                </button>
            </div>
        </div>

        <!-- input 2 - variant 2 com icone -->
        <form class="w-full">
            <div v-for="(input, index) in inputs.data.items" :key="index" class="mb-2">
                <!-- label -->
                <label :for="input.forLabel" class="block text-sm font-normal text-gray-900 dark:text-white">
                    {{ input.nameLabel }}
                </label>
                <!-- input -->
                <input type="text" :id="input.idInput"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :placeholder="input.placeholder" required>
            </div>
        </form>

    </div>
</template>

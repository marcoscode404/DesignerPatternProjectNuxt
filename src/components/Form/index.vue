<script setup>

const isLoad = ref(false)
function setIsLoad(value) {
    isLoad.value = value
}

</script>

<template>
    <main class="mt-32 border border-gray-200 h-full py-20">
        <div class="w-1/3 flex justify-center  m-auto">
            <img src="../../assets/logo.svg">
        </div>

        <form class="w-2/3 mt-10 m-auto">
            <div class="grid gap-6 mb-6 md:grid-cols-1">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Login
                    </label>
                    <input type="text" id="first_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1234" required>
                </div>
            </div>

            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                            focus:ring-red-500 focus:border-red-500 block w-full p-2.5 
                                            dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400
                                             dark:text-white dark:focus:ring-red-200 dark:focus:border-red-200"
                    placeholder="•••••••••" required>
            </div>

            <button @click="setIsLoad(true)" type="submit" class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 
                                    focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full 
                                    px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700
                                     dark:focus:ring-red-800">

                <span v-if="isLoad === false">Acessar</span>
                <span v-else>
                    <Icon name="svg-spinners:3-dots-bounce" />
                </span>
            </button>
        </form>
    </main>
</template>
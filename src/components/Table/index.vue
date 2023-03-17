<script setup>
</script>

<template>
    <div class="overflow-x-auto flex gap-5 flex-col shadow-md drop-shadow-lg sm:rounded-lg ">

        <!-- table1 - variant 1 -->
        <div class="bg-red-200">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs rounded-mg text-gray-900 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr class="p-2">
                        <th scope="col" class="px-6 py-3 border-r border-gray-300">
                            Tipo
                        </th>
                        <th scope="col" class="px-3 py-3 border-r border-gray-300">
                            Rua
                        </th>
                        <th scope="col" class="px-3 py-3 border-r border-gray-300">
                            Prédio
                        </th>
                        <th scope="col" class="px-3 py-3 border-r border-gray-300">
                            Apto
                        </th>
                        <th scope="col" class="px-3 py-3 border-r border-gray-300">
                            Curva
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-300">
                            Picking
                        </th>
                        <td
                            class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-300">
                            03
                        </td>
                        <td
                            class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-300">
                            01
                        </td>
                        <td
                            class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-300">
                            50
                        </td>
                        <td
                            class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-300">
                            A
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- variant 2 -->
        <div class="h-full bg-red-500 overflow-hidden border-2 border-red-500 shadow-lg drop-shadow-2xl sm:rounded-lg">
            <table class="overflow-x-auto w-[100%] h-[100%] md:table-fixed table-fixed">
                <thead class=" bg-red-500 text-white font-semibold p-2">
                    <tr class="row">
                        <th>col1</th>
                        <th>col2</th>
                        <th>col3</th>
                        <th>col4</th>
                        <th>col5</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="odd:bg-white even:bg-slate-50 hover:bg-red-500 hover:ring-red-500 hover:text-white 
                                                hover:font-normal">
                        <td>Picking</td>
                        <td>03</td>
                        <td>01</td>
                        <td>50</td>
                        <td>A</td>
                    </tr>

                    <tr class="odd:bg-white even:bg-slate-50 hover:bg-red-500 hover:ring-red-500 hover:text-white 
                        hover:font-normal active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                        <td>Pulmão</td>
                        <td>02</td>
                        <td>02</td>
                        <td>30</td>
                        <td>B</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<!-- variant 1 -->
<style scoped>
.variant {
    color: white;
}
</style>

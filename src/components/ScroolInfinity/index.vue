<script setup>
import { VVirtualList } from 'vueuc'


const listProducts = await $fetch('https://dummyjson.com/products?limit=100')

function getData() {
    let data = []

    // loop
    for (let index = 0; index < 2000; index++) {
        const element = {
            id: index,
            nome: 'Teste',
            idade: 29,
            cidade: 'Porto Velho',
            estado: 'RO'
        }
        data.push(element)
    }
    return data
}

</script>

<template>
    <div class="h-[500px] overflow-hidden border-2 border-red-500 shadow-lg drop-shadow-2xl sm:rounded-lg">
        <table class="overflow-x-auto w-[100%] h-[100%] md:table-fixed table-fixed">
            <thead class=" bg-red-500 text-white font-semibold p-2">
                <div class="row ">
                    <div>col1</div>
                    <div>col2</div>
                    <div>col3</div>
                    <div>col4</div>
                    <div>col5</div>
                </div>
            </thead>

            <VVirtualList :items="listProducts.products" :item-size="15" v-slot="{ item }">
                <tbody>
                    <div class="row odd:bg-white even:bg-slate-50  hover:bg-red-500 hover:ring-red-500 hover:text-white 
                            hover:font-normal">
                        <div class="w-56">{{ item.brand }}</div>

                        
                        <!-- <div>{{ item.discountPercentage }}</div> -->
                        <!-- <div>{{ item.category }}</div>
                            <div>{{ item.rating }}</div>
                            <div>{{ item.price }}</div> -->
                    </div>
                </tbody>
            </VVirtualList>
        </table>
    </div>
</template>

<style scoped>
.row {
    display: flex;
    gap: 2rem;
    width: 100%;
    justify-content: space-between;
}
</style>

<script setup>

const tooltips = reactive({
    data: {
        items: [
            {
                name: 'Variant 1',
                descriptionTooltip: 'Desabilitado',
                styles: 'p-2 w-2/3 bg-[#808080] font-semibold text-white rounded-lg cursor-not-allowed'
            },
            {
                name: 'Variant 2',
                descriptionTooltip: 'v-tooltip.bottom=',
                styles: 'p-2 w-2/3 bg-red-500 font-semibold text-white rounded-lg'
            },
            {
                name: 'Variant 3',
                descriptionTooltip: 'Habilitado',
                styles: 'p-2 w-2/3 bg-green-500 font-semibold text-white rounded-lg'
            },
        ]
    }
})

</script>

<template>
    <div class="grid grid-cols-3 h-52 items-center">
        <div v-for="(tooltip, index) in tooltips.data.items" :key="index">
            <button v-tooltip.top="tooltip.descriptionTooltip" :class="tooltip.styles">
                {{ tooltip.name }}
            </button>
        </div>

        <button v-tooltip.left="' v-tooltip.left= '" class="p-2 w-2/3 bg-blue-500 font-semibold text-white rounded-lg">Left</button>
        <button v-tooltip.bottom="' v-tooltip.bottom= '" class="p-2 w-2/3 bg-orange-500 font-semibold text-white rounded-lg">Bottom</button>
        <button v-tooltip.right="' v-tooltip.right= '" class="p-2 w-2/3 bg-blue-500 font-semibold text-white rounded-lg">Right</button>
    </div>
</template>

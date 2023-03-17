<script setup>

const tokensColors = {
    data: {
        itens: [
            {
                styles: 'w-3/3 text-white bg-[#EF4444] font-bold flex justify-between m-auto mt-20 p-5 rounded-xl',
                name: '$modena-red500',
                codeColor: '#EF4444',
            },
            {
                styles: 'w-3/3 text-black bg-[#FFE7D9] font-bold flex justify-between m-auto mt-1 p-5 rounded-xl',
                name: '$modena-red500',
                codeColor: '#FFE7D9',
            },
            {
                styles: 'w-3/3 text-white bg-[#22C55E] font-bold flex justify-between m-auto mt-1 p-5 rounded-xl',
                name: '$modena-green500',
                codeColor: '#22C55E',
            },
            {
                styles: 'w-3/3 text-black bg-[#C8FACD] font-bold flex justify-between m-auto mt-1 p-5 rounded-xl',
                name: '$modena-green500',
                codeColor: '#C8FACD',
            },
            {
                styles: 'w-3/3 text-white bg-[#01534A] font-bold flex justify-between m-auto mt-1 p-5 rounded-xl',
                name: '$modena-green500',
                codeColor: '#01534A',
            },
        ]
    }
}

</script>

<template>
    <div v-for="tokensColor in tokensColors.data.itens">
        <div :class=tokensColor.styles>
            <span>{{ tokensColor.name }}</span> {{ tokensColor.codeColor }}
        </div>
    </div>
</template>
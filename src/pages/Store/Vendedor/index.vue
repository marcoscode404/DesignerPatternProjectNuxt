<script setup>
import { useUserInfoStore } from '../../../store/useInfo';

const userInfo = useUserInfoStore()

</script>

<template>
    <div>
        {{ userInfo.comissao }}

        <NuxtLink to="/store/">

            asdasdasdasd
        </NuxtLink>
    </div>
</template>
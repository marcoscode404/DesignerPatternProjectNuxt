<script setup>
import { useUserInfoStore } from '../../store/useInfo';

const userInfo = useUserInfoStore()

</script>

<template>
  <h1>Welcome to your dashboard</h1>
  <div class="flex flex-col gap-5 ml-5">
    <label for="">Nome: <span>{{ userInfo.name }}</span></label>
    <label for="">Grupos:<span>{{ userInfo.groups }}</span></label>
    <label for="">Vendas:<span>{{ userInfo.vendas }}</span></label>
    <button class="bg-blue-300 rounded-r-2xl w-40" @click="userInfo.increment">Add</button>
    <label for="">Comissão: <span>{{ userInfo.comissao }}</span></label>

    <NuxtLink to="/store/vendedor" >
      asdasdasdasd
    </NuxtLink>

  </div>
</template>
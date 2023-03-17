
# inciando projeto 
npx nuxi init <project-name>

# yarn
yarn install

# tailwind
yarn add --dev @nuxtjs/tailwindcss

# icons
yarn add nuxt-icon

# headlessui
yarn add --dev nuxt-headlessui 

# pinia
yarn add pinia @pinia/nuxt

# vue3-toastify
yarn add vue3-toastify

npm i vue3-toastify

# clipboard
<!-- npm install clipboard --save -->

----------------------------------------
# toatip
yarn add floating-vue

<!-- Examplo de uso -->
<!-- crie um  pasta plugin -> plugin.ts e adicione este codigo baixo -->
<!-- https://floating-vue.starpad.dev/guide/component.html#placements link da documentação -->

<!-- import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(FloatingVue);
}); -->

<!-- --- no html - formas de uso -->
 <!-- <VTooltip>
            <button class="p-2 bg-red-500 text-white rounded-lg">
                Button Tooltip
            </button>

            <template #popper>
                Help me fund my Open Source work!
            </template>
 </VTooltip>


 <butto v-tooltip.bottom-start="'teste tooltip'">
    teste
 </butto> -->

----------------------------------------


---------------------------------------------------------------------------------
# Padroes de Código
## use o Gerenciador de Pacotes (yarn) de preferência para baixar as dependências

## camelCase - criação de variaveis
## adotar o cleanCode






















# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

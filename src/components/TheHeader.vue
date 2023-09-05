<template>
    <div class="">
        <div class="flex justify-between items-center">
            <div class="header__logo">
                <h2>Clearbit</h2>
            </div>
            <div class="lg:flex hidden justify-between items-center gap-12 font-medium capitalize">
                <p>solution</p>
                <p>platform</p>
                <p>custumers</p>
                <p>compeny</p>
                <p>resources</p>
            </div>
            <div class="w-10 h-10 lg:hidden">
                <div v-for="n in 3" :key="n" class="w-full border-t-4 border-black my-2 rounded-full"></div>
            </div>
            <div class="flex items-center gap-5">
                <a href="">Login</a>
                <BaseButton type="outline"> Get Started </BaseButton>
            </div>
        </div>
        <div>
            <BaseCard>
                <template #title>Predictable growth starts here.</template>
                <template #description
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</template
                >
                <template #picture>
                    <div class="h-full border-2 border-red-500"></div>
                </template>
            </BaseCard>
            <BaseButton type="fill"> Get Started </BaseButton>
        </div>
        <div class="text-center opacity-80 my-6">
            <p>Clearbit is behind the world's fastest-growing compenies</p>
        </div>
        <div class="flex justify-between flex-col md:flex-row items-center">
            <div class="w-48" v-for="n in 5" :key="n">
                <img src="/src/assets/image/icon.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import BaseCard from './BaseCard.vue';
</script>

<template>
    <div class="px-5 2xl:px-52 xl:px-32 lg:px-24 md:px-8 py-8 bg-slate-100">
        <TheHeader />
        <BaseCard :havePicture="false" class="text-center lg:px-72 md:px-14">
            <template #title> Turn data into better business. </template>
            <template #description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /><br />
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequatquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat
            </template>
        </BaseCard>

        <div
            class="flex md:flex-row flex-col items-center justify-center text-center divide-y md:divide-y-0 md:divide-x sm:divide-x-0 divide-slate-300"
        >
            <div class="p-4 w-96 flex flex-col gap-4" v-for="n in 3" :key="n">
                <p class="text-4xl font-bold text-violet-800">300%</p>
                <p class="text-lg text-regal-blue">increase in form cost per load</p>
                <div class="w-48 mx-auto grid grid-cols-2">
                    <img src="/src/assets/image/icon.png" />
                </div>
            </div>
        </div>
        <div class="w-max mx-auto">
            <base-button type="fill">Explore The platform</base-button>
        </div>

        <div class="min-h-screen flex items-center">
            <BaseCard reverse class="text-6xl">
                <template #title> Khnow your buyer, like you khow your business </template>
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
        </div>
        <div class="min-h-screen flex items-center">
            <BaseCard>
                <template #title> Khnow your buyer, like you khow your business </template>
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
        </div>
        <div class="min-h-screen flex items-center">
            <BaseCard reverse>
                <template #title> Khnow your buyer, like you khow your business </template>
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
        </div>
        <div class="min-h-screen f-center">
            <BaseCard>
                <template #title> Khnow your buyer, like you khow your business </template>
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
        </div>
    </div>
</template>

<script setup>
import BaseCard from '@/components/BaseCard.vue';
import BaseButton from '@/components/BaseButton.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>

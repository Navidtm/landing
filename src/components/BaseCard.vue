<template>
    <div
        class="my-2 items-center w-full h-full lg:flex gap-6"
        :class="{ 'flex-row-reverse': reverse }"
    >
        <div class="w-full text-blue-950 my-10">
            <div class="font-bold my-8 text-4xl md:text-5xl lg:text-6xl">
                <slot name="title" />
            </div>
            <p class="font-semibold text-lg md:text-xl">
                <slot name="description" />
            </p>
        </div>
        <div v-if="havePicture" class="w-full max-h-96 h-56">
            <slot name="picture"/>
        </div>
    </div>
</template>

<script setup>
defineProps({
    havePicture: {
        type: Boolean,
        required: false,
        default: true
    },
    reverse: {
        type: Boolean
    }
});
</script>

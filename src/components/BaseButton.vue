<template>
    <div class="">
        <button
            class="w-max py-3 px-5 rounded-lg bg-center"
            :class="[
                { 'text-white bg-gradient-to-r from-blue-900 to-blue-500': type == 'fill' },
                { 'text-violet-800 border-violet-800 border-2': type == 'outline' }
            ]"
        >
            <slot />
        </button>
    </div>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        required: true,
        validator: (value) => ['fill', 'outline'].includes(value)
    }
});
</script>

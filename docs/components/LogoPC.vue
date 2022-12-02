<template>
    <svg :width="$props.width || $props.size" :height="$props.height || $props.size" viewBox="0 0 24 24">
        <g fill="none" stroke="#007bff" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 22h10" />
            <path d="M2 17V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="m9 10.5l2 2l4-4" />
        </g>
    </svg>
</template>

<script>
export default {
    name: 'LogoPC',
    props: {
        size: {
            type: [String, Number],
            default: '1.5em',
        },
        width: {
            type: [String, Number],
            default: undefined,
        },
        height: {
            type: [String, Number],
            default: undefined,
        },
    },
};
</script>
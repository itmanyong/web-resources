<template>
    <svg :width="$props.width || $props.size" :height="$props.height || $props.size" viewBox="0 0 256 221">
        <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path>
        <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path>
        <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path>
        <path
            fill="#ff0000"
            d="m220,204.2l0,-14.1a18,14.1 0 0 0 -18,-14.1a18,14.1 0 0 0 18,-14.1l0,-14.1a24,18.8 0 0 0 -24,-18.8l-48,0l0,18.8l48,0l0,18.8l-24,0l0,18.8l24,0l0,18.8l-48,0l0,18.8l48,0a24,18.8 0 0 0 24,-18.8"
        />
    </svg>
</template>

<script>
export default {
    name: 'LogoVue3',
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

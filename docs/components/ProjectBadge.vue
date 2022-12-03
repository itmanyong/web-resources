<template>
    <div class="project_badge">
        <img v-if="starts" :src="startsSrc" class="title_tag" />
        <img v-if="nameId || version" :src="versionSrc" class="title_tag" />
    </div>
</template>

<script>
export default {
    name: 'ProjectBadge',
    props: {
        name: {
            type: String,
        },
        starts: {
            type: String,
        },
        version: {
            type: String,
        },
    },
    setup({ name, starts, version }) {
        const nameId = name.toLowerCase();
        return {
            nameId,
            startsSrc: `https://img.shields.io/github/stars/${starts}?style=social`,
            versionSrc: `https://img.shields.io/npm/v/${version || nameId}?label=npm%40latest`,
        };
    },
};
</script>

<style lang="scss" scoped></style>

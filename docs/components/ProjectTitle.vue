<template>
    <h2 :id="nameId" tabindex="-1" class="project_title">
        <div>
            <font class="title_text">
                {{ name }}
            </font>
            <a class="header-anchor" :href="`#${nameId}`" aria-hidden="true">#</a>
        </div>
        <div class="title_tag">
            <img v-if="starts" :src="startsSrc" class="title_tag" />
            <img v-if="nameId || version" :src="versionSrc" class="title_tag" />
        </div>
    </h2>
</template>

<script>
export default {
    name: 'ProjectTitle',
    props: {
        name: {
            type: String,
            required: true,
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
<style scoped lang="scss">
.project_title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title_text {
        color: #147eff;
    }
    .title_tag {
        display: flex;
        column-gap: 12px;
        img {
            height: 20px;
        }
    }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
const { data } = defineProps(['data']);
const { localeIndex } = useData()
const expanded = ref(Array())
function getTileClass(index: Number) {
    return ['tile', expanded.value.includes(index) ? 'expanded' : '']
}
function toggleTile(index: Number) {
    if (expanded.value.includes(index)) {
        const idx = expanded.value.findIndex(i => i == index)
        expanded.value.splice(idx, 1)
    } else {
        expanded.value.push(index)
    }
}
</script>

<template>
    <div v-if="data.length > 0" class="grid">
        <div v-for="(item, index) in data" :class="getTileClass(index)" @click="toggleTile(index)">
            <img :src="item.img" :alt="item.title">
            <div v-if="item.desc || item.url" class="overlay">
                <div v-if="item.desc" v-html="item.desc"></div>
                <a v-if="item.url" :href="item.url" @click.stop target="_blank">{{ localeIndex == 'vi' ? 'Tìm hiểu' : 'Learn more' }}</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 1rem 0;
    .tile {
        width: calc(33% - 10px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-bottom: 20px;
        background-color: #eee;
        border-radius: 15px;
        padding: 10px 15px;
        transition: 0.3s;
        opacity: 0.8;
        cursor: pointer;
        &.expanded {
            .overlay {
                display: block;
                width: 100%;
                color: #555;
                margin-top: 10px;
                border-top: 1px solid var(--vp-c-border);
            }
        }
        &:hover {
            opacity: 1;
        }
        img {
            vertical-align: middle;
            width: 100%;
            max-width: 100%;
            transition: 0.3s;
        }
        .overlay {
            display: none;
        }
    }
}
</style>
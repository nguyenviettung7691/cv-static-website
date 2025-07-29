<script setup lang="ts">
import { ref } from 'vue';
import { useData } from 'vitepress';

const { data } = defineProps({
    data: {
        type: Array,
        required: true
    }
});

const { localeIndex } = useData()

const selected = ref(data[0] || '');

function navigateHandler(direction){
    const currentIndex = data.findIndex(item => item.key == selected.value.key);
    let target;

    if(direction == 'right') target = data[(currentIndex + 1) % data.length];
    else target = data[(currentIndex - 1 + data.length) % data.length];
    
    selected.value = target
}

function getCarouselHeader() {
    return `https://gh-card.dev/repos/${selected.value.repo}.svg?link_target=_blank`
}
function getCarouselInnerStyle() {
    return {
        transform: `translateX(${data.findIndex(item => item.key == selected.value.key) * (- 100)}%)`
    }
}
function getCarouselNavLabelStyle(item) {
    return {
        backgroundColor: isSelected(item) ? 'var(--vp-c-brand-1)' : 'var(--vp-c-bg-elv)',
        opacity: isSelected(item) ? 1 : 0.6,
    };
}

function isSelected(item) {
    return selected.value.key === item.key;
}

</script>

<template>
    <div class="carousel">

        <div class="carousel-header">
            <object type="image/svg+xml" :data="getCarouselHeader()"><div class="loader"></div></object>
            <a class="url" :href="selected.url" target="_blank">{{ localeIndex == 'vi' ? 'Xem trực tiếp trang' : 'See live page' }}</a>
        </div>

        <div class="carousel-inner-wrapper">
            <div class="carousel-inner" :style="getCarouselInnerStyle()">
                <img v-for="item in data" :src="item.image" :key="item.key" class="slide" />
            </div>
        </div>

        <div class="carousel-arrow left" @click="navigateHandler('left')">◀️</div>
        <div class="carousel-arrow right" @click="navigateHandler('right')">▶️</div>

        <div class="carousel-nav">
            <input v-for="item in data" type="radio" name="slider" v-model="selected" :value="item" :id="item.key" :key="item.key">
            <label v-for="item in data" :for="item.key" :style="getCarouselNavLabelStyle(item)"></label>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.carousel {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 1rem;
    margin-top: 10rem;
    outline: thin solid var(--vp-c-border);
    box-shadow: var(--vp-shadow-5);

    .carousel-header {
        position: absolute;
        top: -9rem;
        transform: translateX(25%);
        z-index: 1;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: var(--vp-shadow-3);
        .url {
            position: absolute;
            top: 1rem;
            right: 1rem;
        }
    }

    .carousel-inner-wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 1rem;
        position: relative;
    }

    .carousel-inner {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        height: 100%;
        transition: transform 0.5s ease;

        .slide {
            flex: 1;
            width: 100%;
        }
    }

    .carousel-arrow {
        position: absolute;
        top: 50%;
        font-size: 2rem;
        z-index: 1;
        text-shadow: var(--vp-shadow-3);
        cursor: pointer;
        &.left {
            left: -1.5rem;
        }
        &.right {
            right: -1.5rem;
        }
    }

    .carousel-nav {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
        border-radius: 1rem;

        input[type="radio"] {
            display: none;
        }

        label {
            cursor: pointer;
            width: 1rem;
            height: 1rem;
            background: var(--vp-c-bg-elv);
            border-radius: 50%;
            opacity: 0.6;
            outline: thin solid var(--vp-c-border);
        }
    }

    @media (max-width: 768px) {

        margin-top: 5rem;
        .carousel-header {
            transform: scale(0.5);
            top: -7rem;
            left: calc(25% - 111px);
        }
        .loader {
            transform: scale(0.5);
        }
    }

    .loader {
        width: 320px;
        height: 150px;
        margin: auto;
        display: block;
        position: relative;
        background: #FFF;
        box-sizing: border-box;
    }
    .loader::after {
        content: '';  
        width: calc(100% - 30px);
        height: calc(100% - 30px);
        top: 15px;
        left: 15px;
        position: absolute;
        background-image: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 80%), linear-gradient(#DDD 56px, transparent 0), linear-gradient(#DDD 24px, transparent 0), linear-gradient(#DDD 18px, transparent 0), linear-gradient(#DDD 66px, transparent 0);
        background-repeat: no-repeat;
        background-size: 75px 130px, 55px 56px, 160px 30px, 260px 20px, 290px 56px;
        background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
        box-sizing: border-box;
        animation: animloader 1s linear infinite;
    }

    @keyframes animloader {
        0% {
            background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
        }
        100% {
            background-position: 150% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
        }
    }
}
</style>
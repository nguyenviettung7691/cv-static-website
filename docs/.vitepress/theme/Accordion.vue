<script setup lang="ts">
import { ref } from 'vue';
import { useData } from 'vitepress';
import { icons } from '@iconify-json/simple-icons';
import { getIconData, iconToSVG, iconToHTML, replaceIDs } from '@iconify/utils';

const iconSize = 75;
const smIconSize = 40;

const { localeIndex } = useData()
const { data } = defineProps({
    data: {
        type: Array,
        required: true
    }
});

const selected = ref(data[0] || {});
const hovered = ref({});

function getIconSvg(iconName = '', size = iconSize) {
    const iconData = getIconData(icons, iconName);
    if (!iconData) {
        return null;
    }

    // Use it to render icon
    const renderData = iconToSVG(iconData, {
        height: size, width: size,
    });

    // Generate SVG string
    const svg = iconToHTML(replaceIDs(renderData.body), renderData.attributes);

    return svg;
}

function getSelectedBgStyle() {
    return {
        backgroundColor: selected.value.color || 'var(--vp-c-bg)',
    };
}

function getItemStyle(item) {
    return isSelected(item) || isHovered(item) ? {
        backgroundColor: 'var(--vp-c-bg)',
        boxShadow: item.color ? `0 0 10px ${item.color}` : 'var(--vp-shadow)',
    } : null;
}
function getTitleStyle(item) {
    return isSelected(item) ? {
        textShadow: item.color ? `0 0 10px ${item.color}` : 'var(--vp-shadow)',
    } : null;
}
function getSvgStyle(item, size = iconSize) {
    return {
        color: item.color || '',
        width: size, height: size
    };
}
function isSelected(item) {
    return selected.value?.title === item.title;
}
function isHovered(item) {
    return hovered.value?.title === item.title;
}

</script>

<template>
    <div v-if="data.length > 0" class="accordion">
        <div v-if="selected" class="accordion-selected">
            <div v-if="selected.items?.length > 0" class="accordion-selected_mosaic">
                <div v-for="item in selected.items" :key="item.title" :class="['item', {'wishlist': item.wishlist, 'break': item.break}]">
                    <template v-if="item.icon">
                        <div v-if="getIconSvg(item.icon)" v-html="getIconSvg(item.icon, smIconSize)" :style="getSvgStyle(item, smIconSize)" :alt="item.title" class="icon"></div>
                        <img v-else :src="item.icon" :width="smIconSize" :height="smIconSize" :alt="item.title" class="icon">
                    </template>
                    <div v-if="item.title || item.desc" class="text">
                        <a v-if="item.title" class="title" :href="item.url" @click.stop target="_blank">{{ item.title }}</a>
                        <div v-if="item.desc" v-html="item.desc" class="desc"></div>
                    </div>
                </div>
            </div>
            <div class="accordion-selected_desc">
                <span v-if="selected?.desc" v-html="selected.desc"></span>
                <a v-if="selected?.url" :href="selected.url" @click.stop target="_blank">{{ localeIndex == 'vi' ? 'Tìm hiểu' : 'Learn more' }}</a>
            </div>
            <div class="accordion-selected_background" :style="getSelectedBgStyle()"></div>
        </div>
        <div class="accordion-items">
            <div v-for="item in data" :key="item.title" :class="['accordion-item', {'selected': isSelected(item), 'break': item.break}]" :style="getItemStyle(item)"
                @click.stop="selected = item" @mouseenter="hovered = item" @mouseleave="hovered = {}" @focusin="selected = item">
                <template v-if="item.icon">
                    <div v-if="getIconSvg(item.icon)" v-html="getIconSvg(item.icon)" :style="getSvgStyle(item)" :alt="item.title"></div>
                    <img v-else :src="item.icon" :width="iconSize" :height="iconSize" :alt="item.title">
                </template>
                <div v-if="item.title" v-html="item.title" :class="['accordion-item_title', {show: isSelected(item)}]" :style="getTitleStyle(item)"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.accordion {
    margin-top: 50px;
    &-selected {
        position: relative;
        display: flex;
        justify-content: center;
        height: calc(30vh);
        &_mosaic {
            display: inline-flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            align-content: flex-start;
            gap: 6px;
            padding-top: 5px;
            padding-bottom: 75px;
            overflow: auto;
            scrollbar-width: thin;
            .item {
                background-color: var(--vp-c-bg);
                border-radius: 5px;
                align-items: center;
                display: flex;
                box-shadow: var(--vp-shadow-2);
                max-height: 35px;
                padding: 0 4px;
                gap: 2px;
                font-size: small;
                line-height: 16px;
                &.wishlist {
                    filter: grayscale(100%);
                }
                &.break {
                    flex-basis: 100%;
                }
                .icon {
                    display: inline-block;
                }
            }
        }
        &_desc {
            position: absolute;
            bottom: -20px;
            left: -20px;
            width: calc(100% + 40px);
            padding: 15px 20px 15px 20px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background: linear-gradient(to top, var(--vp-c-bg), transparent);
            text-shadow: var(--vp-shadow-2);
            a { margin-left: 3px;}
        }
        &_background {
            position: absolute;
            top: -20px;
            left: -20px;
            height: calc(100% + 40px);
            width: calc(100% + 40px);
            z-index: -1;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            opacity: 0.5;
            transition: all 0.3s ease-in-out;
        }
    }
        
    &-items {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 10px;
    }

    &-item {
        width: 150px; height: 150px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 50%;
        color: var(--vp-c-text);
        transition: all 0.3s ease-in-out;
        &_title {
            font-size: 1.8rem;
            font-weight: 700;
            margin-top: 5px;
            text-align: center;
            position: absolute;
            bottom: -999px;
            transition: all 0.3s ease-in-out;
            opacity: 0;
            &.show {
                bottom: 15px;
                opacity: 1;
            }
        }
        &.break {
            flex-basis: 100%;
            height: 0;
        }
    }

    @media (max-width: 768px) {
        &-selected {
            &_mosaic {
                gap: 2px;
                padding-top: 0;
                .item {
                    max-height: 30px;
                    padding: 0 2px;
                    gap: 1px;
                    font-size: x-small;
                    line-height: 10px;
                    .icon {
                        transform: scale(0.7);
                    }
                }
            }
            &_desc {
                padding: 15px 5px 15px 5px;
                font-size: 0.8rem;
                line-height: 1rem;
            }
        }
        &-items {
            padding: 5px;
        }
        &-item {
            width: 100px; height: 100px;
            &_title {
                font-size: 1.2rem;
                &.show {
                    bottom: 5px;
                }
            }
        }
    }
}

</style>
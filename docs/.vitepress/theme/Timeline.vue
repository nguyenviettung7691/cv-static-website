<script setup lang="ts">
const { data } = defineProps(['data']);

</script>

<template>
    <ul v-if="data.length > 0" class="time-line">
        <li v-for="item in data" class="time-line-item">
            <span class="badge" v-html="item.badge"></span>
            <h6 class="time-line-item-title" v-html="item.title"></h6>
            <p class="time-line-item-subtitle" v-html="item.subtitle"></p>
            <p class="time-line-item-content" v-html="item.content"></p>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.time-line {
    list-style: none;
    padding-left: 0;
    margin-bottom: 24px;
    .time-line-item {
        padding-left: 40px;
        padding-bottom: 24px;
        margin-top: 0;
        position: relative;
        .badge {
            line-height: 1;
            margin-bottom: 8px;
            background-color: var(--vp-c-brand-1);
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            display: inline-block;
            padding: 0.35em 0.65em;
            font-size: 0.75em;
            font-weight: 700;
            color: #ffffff;
            border-radius: 5px;
        }
        &-title {
            font-size: 1.2rem;
            font-weight: 700;
            line-height: 1;
            margin-bottom: 2px;
            display: flex;
            align-items: center;
        }
        &-subtitle {
            font-size: .9rem;
            font-weight: 500;
            line-height: 1.6;
            margin-bottom: 3px;
            display: flex;
            align-items: center;
        }
        &-content {
            font-size: 1rem;
            font-weight: 300;
            line-height: 1.6;
            margin-bottom: 0;
        }
        &:before{
            content: "";
            display: block;
            position: absolute;
            height: 100%;
            left: 5px;
            transform: translateX(-50%);
            width: 1px;
            background-color: #dcdcdc;
        }
        &:after{
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #979797;
        }
        &:nth-child(2n):after{
            background-color: var(--vp-c-brand-1);
        }
        &:not(:first-child):after {
            top: 5px;
        }
    }
}
</style>
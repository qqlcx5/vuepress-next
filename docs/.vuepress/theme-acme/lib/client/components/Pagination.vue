<template>
    <div class="pagination">
        <span
            class="card-box prev iconfont icon-jiantou-zuo"
            :class="{disabled: currentPage === 1}"
            @click="goPrex()"
        >
            <p>上一页</p>
        </span>

        <!-- 分页在5页及以下时 -->
        <div
            class="pagination-list"
            v-if="pages <= 5"
        >
            <span
                class="card-box"
                v-for="item in pages"
                :key="item"
                :class="{active: currentPage === item}"
                @click="goIndex(item)"
            >{{item}}</span>
        </div>
        <!-- 分页在5页以上 -->
        <div
            class="pagination-list"
            v-else
        >
            <!-- 一号位 -->
            <span
                class="card-box"
                :class="{active: currentPage === 1}"
                @click="goIndex(1)"
            >1</span>

            <!-- 二号位 -->
            <span
                class="ellipsis ell-two"
                v-show="currentPage > 3"
                @click="goIndex(currentPage - 2)"
                title="上两页"
            />
            <!--这里没有使用v-if的原因是因为部署版本在当前页大于3时刷新页面出现了一些bug-->
            <span
                class="card-box"
                v-show="currentPage <= 3"
                :class="{active: currentPage === 2}"
                @click="goIndex(2)"
            >2</span>

            <!-- 三号位 -->
            <span
                class="card-box"
                :class="{active: currentPage >= 3 && currentPage <= (pages - 2)}"
                @click="goIndex(threeNum())"
            >{{ threeNum() }}</span>

            <!-- 四号位 -->
            <span
                class="ellipsis ell-four"
                v-show="currentPage < (pages - 2)"
                @click="goIndex(currentPage + 2)"
                title="下两页"
            />
            <span
                class="card-box"
                v-show="currentPage >= (pages - 2)"
                :class="{active: currentPage === pages-1}"
                @click="goIndex(pages-1)"
            >{{ pages-1 }}</span>

            <!-- 五号位 -->
            <span
                class="card-box"
                :class="{active: currentPage === pages}"
                @click="goIndex(pages)"
            >{{pages}}</span>
        </div>

        <span
            class="card-box next iconfont icon-jiantou-you"
            :class="{disabled: currentPage === pages}"
            @click="goNext()"
        >
            <p>下一页</p>
        </span>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: {
        total: { // 总长度
            type: Number,
            default: 10
        },
        perPage: { // 每页长
            type: Number,
            default: 10
        },
        currentPage: { // 当前页
            type: Number,
            default: 1
        }
    },
    setup(props, { emit }) {
        // 总页数
        const pages = computed(() => {
            return Math.ceil(props.total / props.perPage)
        })
        // 三号位页码计算
        function threeNum() {
            let num = 3
            const currentPage = props.currentPage
            const pages = pages.value
            if (currentPage < 3) {
                num = 3
            } else if (currentPage > (pages - 3)) {
                num = pages - 2
            } else {
                num = currentPage
            }
            return num
        }

        function goPrex() {
            let currentPage = props.currentPage
            if (currentPage > 1) {
                handleEmit(--currentPage)
            }
        }
        function goNext() {
            let currentPage = props.currentPage
            if (currentPage < props.pages) {
                handleEmit(++currentPage)
            }
        }
        function goIndex(i) {
            if (i !== props.currentPage) {
                handleEmit(i)
            }
        }
        function handleEmit(i) {
            emit('getCurrentPage', i)
        }
        return {
            handleEmit,
            goIndex,
            goPrex,
            goNext,
            threeNum,
            pages
        }
    }
}
</script>

<style lang='scss'>
@import '../styles/_variables';

.pagination {
    position: relative;
    height: 60px;
    text-align: center;
    span {
        line-height: 1rem;
        opacity: 0.9;
        cursor: pointer;
        &:hover {
            color: $accentColor;
        }
        &.ellipsis {
            opacity: 0.5;
            &::before {
                content: '...';
                font-size: 1.2rem;
            }
            @media (any-hover: hover) {
                &.ell-two {
                    &:hover {
                        &::before {
                            content: '«';
                        }
                    }
                }
                &.ell-four {
                    &:hover {
                        &::before {
                            content: '»';
                        }
                    }
                }
            }
        }
    }
    > span {
        position: absolute;
        top: 0;
        padding: 1rem 1.2rem;
        font-size: 0.95rem;
        &.disabled {
            color: rgba(125, 125, 125, 0.5);
        }
        &.prev {
            left: 0;
            // border-top-right-radius: 32px;
            // border-bottom-right-radius: 32px;
        }
        &.next {
            right: 0;
            // border-top-left-radius: 32px;
            // border-bottom-left-radius: 32px;
            &::before {
                float: right;
                margin-left: 0.3rem;
            }
        }
        p {
            display: inline;
            line-height: 0.95rem;
        }
    }
    .pagination-list {
        span {
            display: inline-block;
            width: 2.5rem;
            height: 2.5rem;
            line-height: 2.5rem;
            margin: 0.3rem;
            &.active {
                background: $accentColor;
                color: var(--c-bg);
            }
        }
    }
}
@media (max-width: 800px) {
    .pagination {
        > span {
            padding: 1rem 1.5rem;
            p {
                display: none;
            }
        }
    }
}
// 719px
@media (max-width: $MQMobile) {
    .pagination {
        > span {
            // 左右按钮
            padding: 0.9rem 1.5rem;
        }
        .pagination-list {
            span {
                width: 2.3rem;
                height: 2.3rem;
                line-height: 2.3rem;
                margin: 0.25rem;
            }
        }
    }
}
@media (max-width: 390px) {
    .pagination {
        > span {
            // 左右按钮
            padding: 0.8rem 1.3rem;
        }
        .pagination-list {
            span {
                width: 2rem;
                height: 2rem;
                line-height: 2rem;
                margin: 0.1rem;
                margin-top: 0.3rem;
            }
        }
    }
}
</style>

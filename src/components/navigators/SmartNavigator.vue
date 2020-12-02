<template>
  <div class="nav-container"
       title='路由导航都是函数组件生成的'>
    <div class="top rows">
      <h1 class="title">一级导航栏</h1>
      <router-ul :routes="routes"></router-ul>
    </div>
    <div class="secondary rows"
         v-if="secondaryRoutes.length">
      <h2 class="title">二级导航栏</h2>
      <router-ul :routes="secondaryRoutes">
        <template #diy="{ route,  isActive, isExactActive }">
          {{isActive}}{{isExactActive}}
          <span :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">{{ route.name }}</span>
        </template>
      </router-ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { routes } from '@/router/index'
import { Route, RouteConfig } from 'vue-router'

Vue.component('router-ul', {
  functional: true,
  props: {
    routes: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  render: function (createElement, context) {
    const { props, scopedSlots } = context

    return createElement(
      'ul',
      {
        attrs: {
          class: 'ul-container',
          slot: 'ul-slot'
        }
      },
      props.routes.map((route: Route) => {
        const { name, path } = route
        return createElement(
          'li',
          {
            attrs: { class: 'li-element' },
            on: {
              // 自定义点击事件
              // click: function () {
              //   console.info('click', route)
              // }
            }
          },
          [
            createElement(
              'router-link',
              {
                attrs: {
                  to: path
                }
                // 用来向router-link插入
                // scopedSlots: {
                //   diy: ({ href, route, isActive, isExactActive }) => {
                //     return createElement('div', route.name)
                //   }
                // }
              },
              [scopedSlots.diy ? scopedSlots.diy({ route }) : name || path]
            )
          ]
        )
      })
    )
  }
})

@Component({
  components: {}
})
export default class SmartNavigator extends Vue {
  private routes = routes

  private secondaryRoutes: Array<RouteConfig> = []
  getSecondaryRoutes() {
    const currentRoute = this.$router.currentRoute
    const top = currentRoute.matched[0] || { path: '---' } // 一级路由节点
    const match = routes.find((e) => e.path === top.path) || ({} as RouteConfig)
    let children = []
    if (match && match.children) {
      children = match.children.map((e) => {
        const n = { ...e }
        n.path = match.path + '/' + e.path
        if (!n.name) {
          n.name = e.path || '/'
        }
        return n
      })
    }
    return children
  }

  @Watch('$route', { immediate: true })
  routeChanged() {
    this.secondaryRoutes = this.getSecondaryRoutes()
  }

  mounted() {
    this.routes = routes
  }
}
</script>

<style scoped lang="less">
.nav-container {
  padding: 10px;
  box-sizing: border-box;
  flex: none;
  .rows {
    display: flex;
    align-items: center;
    background: #ddd;

    .title {
      white-space: nowrap;
    }

    .ul-container {
      display: flex;
      overflow: auto hidden;
      list-style-type: none;
      padding-left: 20px;
      a {
        text-decoration: none;
        color: #42b983;
        font-size: 1.2rem;
      }

      .router-link-active {
        color: red;
        opacity: 0.6;
        background: lightseagreen;
      }

      .router-link-exact-active {
        color: red;
        opacity: 1;
        background: lightseagreen;
      }

      .li-element {
        display: inline-block;
        padding-right: 4px;

        &:hover {
          a {
            opacity: 0.8;
            background: lightseagreen;
            color: rgb(15, 10, 10);
            opacity: 1;
          }
        }

        * {
          padding: 6px 10px;
          display: inline-block;
          border-radius: 10px;
          white-space: nowrap;
        }
      }
    }

    &.secondary {
      padding-left: 40px;
      .low {
        opacity: 0.7;
      }
    }
  }
}
</style>

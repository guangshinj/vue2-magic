


<template>
  <div class="home">
    <button @click="showThis(1,3,5,7)">debounce</button>
    <button @click="showThis">debounce</button>
  </div>
</template>
    
<script>

function debounce (f, mills = 500) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const _this = this
  let doing = null
  console.info('debounce this', _this)
  return function (...params) {
    if (!doing) {
      doing = setTimeout(() => {
        doing = null
      }, mills)
      console.info(doing)
      const result = f.call(_this, ...params)
      return result
    }
  }
}
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-rest-params */
export default {
  name: 'Home',
  components: {
  },
  mounted () {
    console.info("mounted")
    const obj = { o: 'old', p: { x: '1', y: '2' }, q: [1, 2, 3, { 4: [5, 6, 7] }] }

    function deep (item) {
      if (Array.isArray(item)) {
        const list = []
        for (const ele of item) {
          list.push(deep(ele))
        }
        return list
      } else if (typeof item === 'object') {
        const obj = {}
        for (const key in item) {
          obj[key] = deep(item[key])
        }
        return obj
      } else {
        return item
      }
    }
    const d1 = deep(obj)
    console.info(JSON.stringify(obj))
    console.info(JSON.stringify(d1))
    d1.o = 'new'
    d1.p = { z: 3 }
    d1.q[3][5] = [6, 7]
    d1.q[3][4].unshift(3, 4)
    console.info(JSON.stringify(obj))
    console.info(JSON.stringify(d1))

    // const leastInterval = function (tasks, n) {
    //   const statistics = {}
    //   for (const task of tasks) {
    //     if (task in statistics) {
    //       statistics[task]++
    //     } else {
    //       statistics[task] = 1
    //     }
    //   }
    //   console.info(statistics)
    // }
  },
  methods: {
    showThis: debounce(function (...rest) {
      console.info("Home组件实例：", this, ...rest)
    }, 1000)
  }
};
</script>
<style scoped lang="less">
.home {
  background: rgb(245, 241, 241);
  padding: 10px;
  box-sizing: border-box;
}
</style>

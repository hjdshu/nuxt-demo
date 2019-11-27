<template>
  <div>
    <h2>{{product.id}}</h2>
    <h3>{{product.title}}</h3>
  </div>
</template>
<script>

// 我们这里模拟一个异步请求
function mockApi (id) {
  return new Promise((r, j) => {
    setTimeout(() => {
      r({
        id: id,
        title: `这是一个产品:${id}`
      })
    }, 500)
  })
}

export default {
  async asyncData ({query}) {
    let id = query.id
    let rs = await mockApi(id)
    return {
      product: rs
    }
  }
}
</script>
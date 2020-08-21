<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Current Page: {{ $route.query.p || 'default' }}</p>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li v-for="i in 10" :key="i" class="page-item">
          <router-link
            class="page-link"
            :to="{
              name: 'About',
              query: { p: i }
            }"
            >{{ i }}</router-link
          >
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'About',
  watch: {
    $route(to, from) {
      if (!from.query.p) return
      this.getList()
    }
  },
  computed: {
    current() {
      return this.$route.query.p || 1
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      console.log('getList', this.current)
    }
  }
}
</script>

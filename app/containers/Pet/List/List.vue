<template>
  <div class="PetList">
    <div>合計: {{ presenter.total }}件</div>
    <ul>
      <li v-for="pet in presenter.pets" :key="pet.props.id">
        ID: {{ pet.props.id }}, Name: {{ pet.props.name }}
      </li>
    </ul>
    <Pager :total-page="totalPage" :current-page="presenter.page" @change="changePage" @prev="prevPage" @next="nextPage" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Pager from '@/components/shared/molecules/Pager'
import Presenter, { IPresenter } from './presenter'

const PER_PAGE = 5

export default Vue.extend({
  components: {
    Pager
  },
  computed: {
    presenter(): IPresenter {
      return Presenter({
        petRepository: this.$petRepository,
        pagerRepository: this.$pagerRepository
      })
    },
    totalPage(): number {
      const total = this.presenter.total
      return total ? Math.ceil(total) / PER_PAGE : 0
    }
  },
  methods: {
    changePage(page: number) {
      this.updatePage(page)
    },
    prevPage() {
      const prevPage = this.presenter.page - 1
      this.updatePage(prevPage)
    },
    nextPage() {
      const nextPage = this.presenter.page + 1
      this.updatePage(nextPage)
    },
    updatePage(page: number) {
      this.$router.push({ path: this.$route.path, query: { page: String(page) } })
    }
  }
})
</script>

<style scoped>
ul {
  padding: 200px;
}
</style>

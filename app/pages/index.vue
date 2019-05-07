<template>
  <div>
    <PetListContainer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PetListContainer from '@/containers/Pet/List'
import FetchPetsUseCase from '@/usecases/pet/FetchPetsUseCase'

export default Vue.extend({
  components: {
    PetListContainer
  },
  watchQuery: ['page'],
  async fetch(ctx) {
    const { $logService, $petRepository, $petStoreGateway, $pagerRepository, query } = ctx
    const page = query['page'] ? parseInt(query['page'] as string, 10) : 1
    const usecase = new FetchPetsUseCase({
      logService: $logService,
      petRepository: $petRepository,
      petStoreGateway: $petStoreGateway,
      pagerRepository: $pagerRepository
    })

    try {
      await usecase.execute(page)
    } catch (e) {
      console.log(e)
      // TODO: Handle error
    }
  }
})
</script>

import Vue from 'vue'
import { Context } from '@nuxt/vue-app'
import PetRepository from '@/repositories/PetRepository'
import PagerRepository from '@/repositories/PagerRepository'
import PetStoreGateway from '@/gateways/PetStoreGateway'
import LogService from '@/services/LogService'

declare module 'vuex/types/index' {
  interface ActionTree<S, R> {
    nuxtServerInit: (context: ActionContext<S, R>, nuxtContext: Context) => void
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    // Repositories
    $petRepository: PetRepository
    $pagerRepository: PagerRepository

    // Gateways
    $petStoreGateway: PetStoreGateway

    // Services
    $logService: LogService
  }
}

declare module '@nuxt/vue-app/types/index' {
  interface Context {
    // Repositories
    $petRepository: PetRepository
    $pagerRepository: PagerRepository

    // Gateways
    $petStoreGateway: PetStoreGateway

    // Services
    $logService: LogService
  }
}

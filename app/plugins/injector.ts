import { Context } from '@nuxt/vue-app'
import Vue from 'vue'
import PetRepository from '@/repositories/PetRepository'
import PagerRepository from '@/repositories/PagerRepository'
import PetStoreGateway from '@/gateways/PetStoreGateway'
import LogService from '@/services/LogService'

// FIXME
const dummyLogger = {
  sendLog(params: Error | string) {
    console.log('/// logging with dummy logger ///')
    console.log(params)
  }
}

export default (ctx: Context) => {
  const { store } = ctx
  Vue.prototype.$petRepository = new PetRepository(store)
  Vue.prototype.$pagerRepository = new PagerRepository(store)
  Vue.prototype.$petStoreGateway = new PetStoreGateway()
  Vue.prototype.$logService = new LogService(dummyLogger)

  ctx.$petRepository = new PetRepository(store)
  ctx.$pagerRepository = new PagerRepository(store)
  ctx.$petStoreGateway = new PetStoreGateway()
  ctx.$logService = new LogService(dummyLogger)
}

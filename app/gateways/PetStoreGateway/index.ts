import { APIClient } from '@/infra/network/APIClient'
import Pet from './pet'

export default class PetStoreGateway {
  apiClient: APIClient
  Pet: Pet

  constructor() {
    // TODO: APIClient Stubを用意したらClientをDIするようにする - 20190507 Shin Ando
    const apiClient = new APIClient()
    this.apiClient = apiClient

    this.Pet = new Pet(apiClient)
  }
}

export const PetStoreGatewayFactory = (): PetStoreGateway => {
  return new PetStoreGateway()
}

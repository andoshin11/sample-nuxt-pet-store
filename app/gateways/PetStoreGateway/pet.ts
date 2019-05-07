import { PetStoreGatewayBase } from './base'
import { toPetProps, toPetSeed } from './translator'
import { GetPets, GetPet, PostPets } from '@/infra/network/requests/PetStore'
import { IPetProps, IPetSeed } from '@/entities/Pet'

export default class Pet extends PetStoreGatewayBase {
  async getPets(params: { perPage?: number, page?: number }) {
    const { pets, total } = await this.apiClient.request(new GetPets(params))
    return {
      total,
      pets: pets.map(toPetProps)
    }
  }

  async getPet(petId: number): Promise<IPetProps> {
    const { pet } = await this.apiClient.request(new GetPet(petId))
    return toPetProps(pet)
  }

  async createPet(seed: IPetSeed): Promise<IPetProps> {
    const { pet } = await this.apiClient.request(new PostPets(toPetSeed(seed)))
    return toPetProps(pet)
  }
}

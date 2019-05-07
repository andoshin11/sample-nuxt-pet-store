import { PetStore, PetSeed } from '@andoshin11/sample-petstore-api'
import { APIRequest } from '@/infra/network/APIRequest'
import { HTTPMethod } from '@/infra/network/APIClient'

export class GetPets implements APIRequest<PetStore.Pet.GetPetsResponse> {
  response: PetStore.Pet.GetPetsResponse
  path = '/pets'
  method = HTTPMethod.GET
  params: PetStore.Pet.GetPetsRequest

  constructor(params: { perPage?: number, page?: number }) {
    const { perPage, page } = params
    this.params = {
      per_page: perPage,
      page
    }
  }
}

export class GetPet implements APIRequest<PetStore.Pet.GetPetResponse> {
  response: PetStore.Pet.GetPetResponse
  path: string
  method = HTTPMethod.GET

  constructor(petId: number) {
    this.path = `/pets/${petId}`
  }
}

export class PostPets implements APIRequest<PetStore.Pet.CreatePetResponse> {
  response: PetStore.Pet.CreatePetResponse
  path = '/pets'
  method = HTTPMethod.POST
  params: PetStore.Pet.CreatePetRequest

  constructor(seed: PetSeed) {
    this.params = {
      pet: seed
    }
  }
}

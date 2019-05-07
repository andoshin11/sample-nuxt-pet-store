import { RequestHandler } from 'express'
import { PetStore } from '@andoshin11/sample-petstore-api'
import { createPet } from '../factory/pet'

export const Index: RequestHandler = (req, res) => {
  const page = parseInt(req.query['page'], 10) || 1
  const response: PetStore.Pet.GetPetsResponse = {
    page: 1,
    total: 25,
    per_page: 5,
    pets: [
      createPet({ id: page * 10 + 1, name: 'Gritz' }),
      createPet({ id: page * 10 + 2, name: 'Neko' }),
      createPet({ id: page * 10 + 3, name: 'Carol' }),
      createPet({ id: page * 10 + 4, name: 'Tom' }),
      createPet({ id: page * 10 + 5, name: 'Sherry' }),
    ]
  }
  
  res.json(response)
}

export const Show: RequestHandler = (req, res) => {
  const id: number = parseInt(req.params['petId'], 10)
  // for debug use
  if (id === 403) {
    res.status(403)
    res.send(new Error('Forbidden pet!'))
    return
  }
  
  const response: PetStore.Pet.GetPetResponse = {
    pet: createPet({ id })
  }

  res.json(response)
}

export const Create: RequestHandler = (req, res) => {
  const body = req.body as PetStore.Pet.CreatePetRequest
  const id = Math.floor(Math.random() * 10001) // 0 ~ 10000の乱数
  const response: PetStore.Pet.CreatePetResponse = {
    pet: createPet({ id, ...body.pet })
  }

  res.json(response)
}

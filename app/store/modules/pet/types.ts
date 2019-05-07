import { IPetProps } from '@/entities/Pet'

export const Types = {
  STORE_PETS: 'pet/store_pets',
  STORE_PETS_BY_PAGE: 'pet/store_pets_by_page'
}

export class StorePets implements FluxStandardAction {
  type = Types.STORE_PETS
  constructor(public payload: IPetProps[]) {}
}

export class StorePetsByPage implements FluxStandardAction {
  type = Types.STORE_PETS_BY_PAGE
  constructor(public payload: { page: number, ids: Array<IPetProps['id']> }) {}
}

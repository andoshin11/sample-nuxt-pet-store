import { IPager } from '@/types/shared/pager'

export const Types = {
  SET_PETS_PAGER: 'pager/set_pets_pager'
}

export class SetPetsPager implements FluxStandardAction {
  type = Types.SET_PETS_PAGER
  constructor(public payload: Partial<IPager>) {}
}

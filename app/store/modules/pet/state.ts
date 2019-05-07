import { IPetProps } from '@/entities/Pet'

export interface IPetState {
  byId: {
    [petId: number]: IPetProps
  }
  byPage: {
    [page: number]: Array<IPetProps['id']>
  }
}

export const initialState = (): IPetState => ({
  byId: {},
  byPage: {}
})

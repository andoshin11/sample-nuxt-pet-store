export interface IPetProps {
  id: number
  name: string
  category: 'dog' | 'cat' | 'others'
  sex: 'male' | 'female'
  note?: string
}

export type IPetSeed = Pick<IPetProps, 'name' | 'category' | 'sex' | 'note'>

export default class PetEntity {
  private _props: IPetProps

  constructor(props: IPetProps) {
    this._props = props
  }

  get props(): IPetProps {
    return this._props
  }
}

export const PetSeedFactory = (props?: Partial<IPetSeed>): IPetSeed => {
  return {
    name: 'Gritz',
    category: 'cat',
    sex: 'male',
    note: 'Sphinx',
    ...props
  }
}

export const PetPropsFactory = (props?: Partial<IPetProps>): IPetProps => {
  return {
    id: 1,
    name: 'Gritz',
    category: 'cat',
    sex: 'male',
    note: 'Sphinx',
    ...props
  }
}

export const PetEntityFactory = (props?: Partial<IPetProps>): PetEntity => {
  return new PetEntity(PetPropsFactory(props))
}

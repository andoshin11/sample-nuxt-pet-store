export interface PetFields {
  name: string | null;
  category: 'dog' | 'cat' | 'others' | null;
  sex: 'male' | 'female' | null;
  note: string | null
}

const NAME_LENGTH_LIMIT = 32

export default class PetValidator {
  fields: Partial<PetFields>

  constructor(fields: Partial<PetFields>) {
    this.fields = fields
  }

  isNameLengthValid(): boolean {
    return !!this.fields.name && this.fields.name.length <= NAME_LENGTH_LIMIT
  }

  isSexValid(): boolean {
    return !!this.fields.sex && ['male', 'female'].includes(this.fields.sex)
  }
}

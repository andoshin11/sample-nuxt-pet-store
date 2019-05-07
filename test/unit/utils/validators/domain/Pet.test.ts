import PetValidator, { PetFields } from '@/utils/validators/domain/Pet'

describe('PetValidator', () => {
  describe('#isNameLengthValid', () => {
    test('should return true', () => {
      const cases: Partial<PetFields>[] = [
        {
          name: 'a'
        },
        {
          name: 'hoge'
        },
        {
          name: 'hogehogehogehogehogehogehogehoge'
        }
      ]

      cases.forEach(fields => {
        expect(new PetValidator(fields).isNameLengthValid()).toBe(true)
      })
    })

    test('should return false', () => {
      const cases: Partial<PetFields>[] = [
        {
          name: null
        },
        {
          name: ''
        },
        {
          name: 'hogehogehogehogehogehogehogehogehoge'
        }
      ]

      cases.forEach(fields => {
        expect(new PetValidator(fields).isNameLengthValid()).toBe(false)
      })
    })
  })

  describe('#isSexValid', () => {
    test('should return true', () => {
      const cases: Partial<PetFields>[] = [
        {
          sex: 'female'
        },
        {
          sex: 'male'
        }
      ]

      cases.forEach(fields => {
        expect(new PetValidator(fields).isSexValid()).toBe(true)
      })
    })

    test('should return false', () => {
      const cases: Partial<PetFields>[] = [
        {
          sex: null
        },
        {
          // @ts-ignore
          sex: 'f'
        },
        {
          // @ts-ignore
          sex: 'm'
        }
      ]

      cases.forEach(fields => {
        expect(new PetValidator(fields).isSexValid()).toBe(false)
      })
    })
  })
})


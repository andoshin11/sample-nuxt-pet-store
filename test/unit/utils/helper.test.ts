import * as helper from '@/utils/helper'

describe('oneOf', () => {
  test('should return true', () => {
    const oneOf = helper.oneOf(['a', 'b', 'c', 'd', 'e'])
    expect(oneOf).toBeTruthy()
    if (oneOf) {
      expect(oneOf('a')).toBe(true)
      expect(oneOf('b')).toBe(true)
      expect(oneOf('c')).toBe(true)
      expect(oneOf('d')).toBe(true)
      expect(oneOf('e')).toBe(true)
    }
  })

  test('should return false', () => {
    const oneOf = helper.oneOf(['a', 'b', 'c', 'd', 'e'])
    expect(oneOf).toBeTruthy()
    if (oneOf) {
      expect(oneOf('f')).toBe(false)
      expect(oneOf('g')).toBe(false)
      expect(oneOf('h')).toBe(false)
      expect(oneOf('i')).toBe(false)
      expect(oneOf('j')).toBe(false)
    }
  })
})

describe('range', () => {
  const { range } = helper

  test('should return correct range of numbers', () => {
    expect(range(3, 5)).toEqual([3, 4, 5])
    expect(range(1, 2)).toEqual([1, 2])
    expect(range(6, 10)).toEqual([6, 7, 8, 9, 10])
  })

  test('should throw order error', () => {
    const wrapper = (): void => {
      range(5, 3)
    }

    expect(wrapper).toThrowError(/^The first argument must be smaller than the second arg.$/)
  })

  test('should throw equality error', () => {
    const wrapper = (): void => {
      range(3, 3)
    }

    expect(wrapper).toThrowError(/^Both of the given arguments must not be identical to each other.$/)
  })
})

describe('extractTargetFields', () => {
  test('should return correctly', () => {
    const fields = {
      firstname: 'firstname',
      lastname: 'lastname',
      firstnameRuby: 'firstnameRuby',
      lastnameRuby: 'lastnameRuby'
    }
    const enableCheckFlg = {
      firstname: true,
      lastname: false,
      firstnameRuby: true,
      lastnameRuby: false
    }
    expect(helper.extractTargetFields(fields, enableCheckFlg)).toEqual({ firstname: 'firstname', firstnameRuby: 'firstnameRuby' })
  })
})

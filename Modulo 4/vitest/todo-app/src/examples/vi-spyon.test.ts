// src/examples/vi-spyon.test.ts
import { describe, it, expect, vi, afterEach } from 'vitest'

describe('vi.spyOn()', () => {
  afterEach(() => {
    // restaura los métodos originales después de cada test
    vi.restoreAllMocks()
  })

  it('espía console.log sin perder su comportamiento', () => {
    const spy = vi.spyOn(console, 'log')

    console.log('hola')

    expect(spy).toHaveBeenCalledWith('hola')
  })

  it('puede reemplazar la implementación temporalmente', () => {
    // evita que Math.random sea impredecible en el test
    const spy = vi.spyOn(Math, 'random').mockReturnValue(0.5)

    expect(Math.random()).toBe(0.5)
    expect(spy).toHaveBeenCalled()
  })
})
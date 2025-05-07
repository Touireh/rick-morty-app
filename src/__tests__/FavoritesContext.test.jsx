import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { FavoritesProvider, useFavorites } from '../contexts/FavoritesContext'

describe('FavoritesContext', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  const mockCharacter = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive'
  }

  const mockCharacter2 = {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive'
  }

  it('should initialize with empty favorites', () => {
    const wrapper = ({ children }) => <FavoritesProvider>{children}</FavoritesProvider>
    const { result } = renderHook(() => useFavorites(), { wrapper })
    
    expect(result.current.favorites).toHaveLength(0)
  })

  it('should add character to favorites', () => {
    const wrapper = ({ children }) => <FavoritesProvider>{children}</FavoritesProvider>
    const { result } = renderHook(() => useFavorites(), { wrapper })

    act(() => {
      result.current.addFavorite(mockCharacter)
    })

    expect(result.current.favorites).toHaveLength(1)
    expect(result.current.favorites[0]).toEqual(mockCharacter)
  })

  it('should remove character from favorites', () => {
    const wrapper = ({ children }) => <FavoritesProvider>{children}</FavoritesProvider>
    const { result } = renderHook(() => useFavorites(), { wrapper })

    act(() => {
      result.current.addFavorite(mockCharacter)
      result.current.removeFavorite(mockCharacter.id)
    })

    expect(result.current.favorites).toHaveLength(0)
  })

  it('should persist favorites in localStorage', () => {
    const wrapper = ({ children }) => <FavoritesProvider>{children}</FavoritesProvider>
    const { result } = renderHook(() => useFavorites(), { wrapper })

    act(() => {
      result.current.addFavorite(mockCharacter)
    })

    const storedFavorites = JSON.parse(localStorage.getItem('favorites'))
    expect(storedFavorites).toHaveLength(1)
    expect(storedFavorites[0]).toEqual(mockCharacter)
  })

  it('should load favorites from localStorage on initialization', () => {
    localStorage.setItem('favorites', JSON.stringify([mockCharacter]))
    
    const wrapper = ({ children }) => <FavoritesProvider>{children}</FavoritesProvider>
    const { result } = renderHook(() => useFavorites(), { wrapper })

    expect(result.current.favorites).toHaveLength(1)
    expect(result.current.favorites[0]).toEqual(mockCharacter)
  })

  it('should handle multiple favorites', () => {
    const wrapper = ({ children }) => <FavoritesProvider>{children}</FavoritesProvider>
    const { result } = renderHook(() => useFavorites(), { wrapper })

    act(() => {
      result.current.addFavorite(mockCharacter)
      result.current.addFavorite(mockCharacter2)
    })

    expect(result.current.favorites).toHaveLength(2)
    expect(result.current.favorites).toContainEqual(mockCharacter)
    expect(result.current.favorites).toContainEqual(mockCharacter2)
  })
})
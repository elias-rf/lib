import { useEffect } from 'react'

/**
 * useInterval hook
 */
export const useInterval = (fn, delay) => {
  useEffect(() => {
    const id = setInterval(fn, delay)
    return () => clearInterval(id)
  })
}

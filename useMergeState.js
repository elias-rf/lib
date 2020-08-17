import { useState } from 'react'

/**
 *
 *
 * @param {object} [initial={}] Initial state object, default is {}.
 * @returns Like setState in React class component, merge the old and new state together.
 */
export const useMergeState = (initial = {}) => {
  const [state, set] = useState(initial)
  const mergeState = updater =>
    set(prev => (typeof updater === 'function' ? { ...prev, ...updater(prev) } : { ...prev, ...updater }))

  return [state, mergeState]
}

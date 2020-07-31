import { useEffect, useRef } from 'react';

/* eslint-disable react-hooks/exhaustive-deps */

/**
 * Similar to componentDidMount in React class component.
 *
 * @param {() => void} f f is called when component did mount.
 *
 */
export const useDidMount = (f) => useEffect(() => f && f(), []);

/**
 * Similar to componentDidUpdate, it only runs on updates.
 *
 * @param {() => Function | void} f f is called on every updates. Like useEffect, f can return a clean-up function.
 * @param {Array<any>} conditions? Optional array for conditionally firing an effect, same as the second argument passed to useEffect.
 */
export const useDidUpdate = (f, conditions) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    // Cleanup effects when f returns a function
    return f && f(); //eslint-disable-line
  }, conditions);
};

/**
 * Close to the componentWillUnmount in React class component.
 *
 * @param {() => void} f f is called when component will unmount.
 */
export const useWillUnmount = (f) => useEffect(() => () => f && f(), []);

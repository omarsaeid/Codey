import { useCallback, useEffect, useRef, useState } from 'react';

/** Counts 0 → target in ~30 steps of 30ms (same cadence as the prototype). Call `start()` when the element enters the viewport. */
export function useCountUp(target: number, suffix = '') {
  const [text, setText] = useState('0');
  const timer = useRef<number>();
  const started = useRef(false);

  // Reset on cleanup so React StrictMode's mount/unmount/mount cycle can't leave the counter stuck at 0.
  useEffect(
    () => () => {
      window.clearInterval(timer.current);
      started.current = false;
    },
    [],
  );

  const start = useCallback(() => {
    if (started.current) return;
    started.current = true;
    let v = 0;
    timer.current = window.setInterval(() => {
      v = Math.min(target, v + Math.ceil(target / 30));
      setText(v === target ? `${v}${suffix}` : String(v));
      if (v === target) window.clearInterval(timer.current);
    }, 30);
  }, [target, suffix]);

  return { text, start };
}

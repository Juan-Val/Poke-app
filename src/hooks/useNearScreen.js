import { useState, useEffect, useRef } from "react";

export function useNearScreen(options) {
  const ref = useRef();

  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    if (!ref.current) return;

    const callback = (entries, observer) => {
      setEntry(entries[0]);
      setInView(entries[0].isIntersecting);
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(ref.current);
  }, [ref.current]);

  return [ref, inView, entry];
}

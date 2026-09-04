
import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Set the initial value
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Define a listener function to update state on change
    const listener = (e) => setMatches(e.matches);

    // Listen for changes
    media.addEventListener('change', listener);

    // Clean up the listener when the component unmounts
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

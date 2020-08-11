import { useEffect, useState } from 'react';

function useMainCard(url) {
  const [mainCard, setMainCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUrl() {
      const res = await fetch(url);
      const data = await res.json();

      setMainCard(data);
      setIsLoading(false);
    }

    fetchUrl();
  }, [url]);

  return [mainCard, isLoading];
}

export { useMainCard };

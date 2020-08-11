import { useEffect, useState } from 'react';
import DB from '../utils/db';

function usePersons(url) {
  const [persons, setPersons] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUrl() {
      const res = await fetch(url);
      const data = await res.json();
      const dbKey = 'persons';
      const db = DB(dbKey);
      const hasSavedData = db.get(dbKey);
      if (!hasSavedData) {
        db.save(data);
      }
      setPersons(db.get(dbKey));
      setIsLoading(false);
    }

    fetchUrl();
  }, [url]);

  return [persons, isLoading];
}

export { usePersons };

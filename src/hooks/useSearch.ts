import { useEffect, useState } from 'react';

export function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [search]);

  return { search, setSearch, error };
}

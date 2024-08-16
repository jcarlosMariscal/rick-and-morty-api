import { useEffect, useState } from "react";
import ICharacter from "../interfaces/characters.interface";
import { IError } from "../interfaces/errors.interface";

interface UseFetchData {
  data: ICharacter[] | ICharacter | null;
  error: IError | null;
  loading: boolean;
  totalPages: number | null;
}

const useFetch = (endpoint: string, page?: number): UseFetchData => {
  const [data, setData] = useState<ICharacter[] | ICharacter | null>(null);
  const [error, setError] = useState<IError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const URL = `https://rickandmortyapi.com/api/${endpoint}`;
        const res = await fetch(`${URL}${page ? `?page=${page}` : ""}`);
        if (!res.ok) throw new Error(res.status.toString());

        const result = await res.json();

        setData(result.results || result);
        if (result.info?.pages) setTotalPages(result.info.pages);
      } catch (err) {
        if (err instanceof Error) {
          const status = parseInt(err.message, 10);
          setError({ code: status });
        } else {
          setError(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, page]);

  return { data, error, loading, totalPages };
};

export default useFetch;

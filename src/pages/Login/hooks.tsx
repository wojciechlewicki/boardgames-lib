import { loginWithEmail } from "../../services/api/auth";
import { useEffect, useState } from "react";

export const useLoginWithEmail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await loginWithEmail("wojtek4567@o2.pl", "test12");
      setData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return {
    data,
    isLoading,
  };
};

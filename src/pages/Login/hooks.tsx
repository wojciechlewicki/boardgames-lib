import { loginWithEmail } from "../../services/api/auth";
import { useEffect, useState } from "react";

export const useLoginWithEmail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await loginWithEmail("email", "password");
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

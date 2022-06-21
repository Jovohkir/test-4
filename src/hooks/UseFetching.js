import { useState } from "react";

export const UseFetching = (calback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const fetching = async () => {
    try {
      setIsLoading(true);
      await calback();
    } catch (e) {
      setErr(e.massage);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, err];
};

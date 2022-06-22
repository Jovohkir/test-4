import { useState } from "react";

export const UseFetching = (calback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await calback(...args);
    } catch (e) {
      setErr(e.massage);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, err];
};

import { useEffect, useState } from "react";

export const useAnimation = () => {
  const [animation, setAnimation] = useState([
    {
      isLoading: true,
    },
  ]);

  const fetchProfiles = async () => {
    setAnimation({
      isLoading: true,
    });

    setTimeout(() => {
      setAnimation({
        isLoading: false,
      });
    }, 3000);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return {
    isLoading: animation.isLoading,
  };
};

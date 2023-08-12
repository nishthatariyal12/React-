import { useEffect, useState } from "react";

const useUserData = (userId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({}); // Change to an object for single user data

  useEffect(() => {
    fetchData(userId);
  }, [userId]);

  const fetchData = async (userId) => {
    try {
      const response = await fetch(`https://panorbit.in/api/users.json`);
      const jsonData = await response.json();

      // Find the user with the matching ID
      const user = jsonData?.users?.find(user => user?.id == userId);

      if (user) {
        setUserData(user);
      } else {
        console.error("User not found");
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { isLoading, userData };
};

export default useUserData;

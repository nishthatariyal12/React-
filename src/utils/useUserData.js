import { useEffect, useState } from "react";

const useUserData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://panorbit.in/api/users.json");
      const jsonData = await response.json();
      console.log(jsonData.users);
      setUserData(jsonData.users);
      setIsLoading(false); // Set isLoading to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { isLoading, userData }; // Return isLoading along with userData
};

export default useUserData;

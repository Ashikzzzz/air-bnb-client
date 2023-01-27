import React from "react";
import { useQuery } from "react-query";

const ManageHome = () => {
  const { data: homes, isLoading } = useQuery({
    queryKey: ["homes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/homes");
      const data = await res.json();
      return data;
    },
  });
  console.log(homes);
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

export default ManageHome;

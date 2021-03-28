import axios from "axios";
import { useQuery } from "react-query";

export const fetchTrunks = async () => {
  const res = await axios.get("http://localhost:3000/api/trunks");
  return res.data;
};

export const useTrunks = () => {
  return useQuery("trunks", fetchTrunks);
};

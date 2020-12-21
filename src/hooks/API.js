import axios from "axios";
import useSWR from "swr";

const baseURL =
  // eslint-disable-next-line no-undef
  process.NODE_ENV === "production" ? "/" : "https://mindschool.am/";
export const axiosInstance = axios.create({
  baseURL,
});

const fetcher = async (url) => {
  try {
    const { data } = await axiosInstance.get(url);
    console.log(url, data);
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
};
export const useAPI = (url) => {
  return useSWR(url, fetcher);
};

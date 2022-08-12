import { useState, useEffect } from "react";
import API from "../API";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get(url)
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  }, [url]);

  return { data };
};

export default useFetch;

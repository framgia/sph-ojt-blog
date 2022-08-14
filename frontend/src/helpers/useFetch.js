import { useState, useEffect } from "react";
import API from "../API";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [apiUrl, setApiUrl] = useState("/posts/");

  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      API.get(apiUrl)
        .then(
          (res) => (
            setData(res.data.results),
            setPageCount(Math.ceil(res.data.count / 5)),
            setLoading(false)
          )
        )
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [url, apiUrl]);

  const handleChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
    setApiUrl("/posts/?page=" + pageInfo.activePage.toString());
  };

  return { data, handleChange, activePage, pageCount, loading };
};

export default useFetch;

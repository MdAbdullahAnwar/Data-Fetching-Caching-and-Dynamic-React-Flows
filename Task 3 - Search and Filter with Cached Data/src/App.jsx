import React, { useEffect, useState, useCallback } from "react";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      setData(result);
      setFilteredData(result);
      localStorage.setItem("cachedData", JSON.stringify(result));
      localStorage.setItem("cacheTime", Date.now());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const cachedData = localStorage.getItem("cachedData");
    if (cachedData) {
      setData(JSON.parse(cachedData));
      setFilteredData(JSON.parse(cachedData));
    } else {
      fetchData();
    }
  }, []);

  const handleRefresh = () => {
  localStorage.removeItem("cachedData");
  localStorage.removeItem("cacheTime");
  setSearchTerm("");
  fetchData();
};

  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleSearch = useCallback(
    debounce((query) => {
      if (!query) {
        setFilteredData(data);
      } else {
        const filtered = data.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
      }
    }, 500),
    [data]
  );

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="app-container">
      <h1 className="title">Cached API Data with Search</h1>
      <button className="refresh-btn" onClick={handleRefresh}>
        Refresh Data
      </button>

      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search by title..."
        className="search-input"
      />

      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <ul className="data-list">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <li key={item.id} className="data-item">
                <span className="post-id">{item.id}.</span>{" "}
                <strong>{item.title}</strong>
              </li>
            ))
          ) : (
            <p className="no-results">No results found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default App;

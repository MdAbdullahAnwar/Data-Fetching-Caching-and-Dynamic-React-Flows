import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import "./Posts.css";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

function Posts() {
  const queryClient = useQueryClient();
  const [lastUpdated, setLastUpdated] = useState(
    localStorage.getItem("lastUpdated") || null
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    initialData: () => {
      const cached = localStorage.getItem("posts");
      return cached ? JSON.parse(cached) : undefined;
    },
  });

  useEffect(() => {
    if (data) {
      localStorage.setItem("posts", JSON.stringify(data));
      const timestamp = new Date().toLocaleString();
      localStorage.setItem("lastUpdated", timestamp);
      setLastUpdated(timestamp);
    }
  }, [data]);

  const refreshData = () => {
    queryClient.removeQueries({ queryKey: ["posts"] });
    localStorage.removeItem("posts");
    localStorage.removeItem("lastUpdated");
    setLastUpdated(null);

    queryClient.fetchQuery(["posts"], fetchPosts);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div>
      <button className="refresh-btn" onClick={refreshData}>
        Refresh Data
      </button>

      {lastUpdated && <p className="last-updated">Last Updated: {lastUpdated}</p>}

      <table className="posts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Posts;

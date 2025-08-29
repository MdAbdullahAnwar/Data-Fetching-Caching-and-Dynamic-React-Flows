import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Posts from "./components/Posts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>React Query - API Caching</h1>
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

export default App;

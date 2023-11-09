import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import BaseAPIClient from "src/api/axiosConfig.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/helpers";
import { BrowserRouter } from "react-router-dom";

export const baseURL = "https://api.fastforex.io";
export default new BaseAPIClient(baseURL);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);

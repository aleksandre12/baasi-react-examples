import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CallProvider, ParticipantProvider } from "@baasi/baasi-react-sdk";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CallProvider options={{ audio: true, video: true }}>
        <ParticipantProvider>
          <App />
        </ParticipantProvider>
      </CallProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

"use client";

import { CallProvider } from "@baasi/baasi-react-sdk";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CallProvider options={{ audio: true, video: true }}>
      <>{children}</>
    </CallProvider>
  );
}

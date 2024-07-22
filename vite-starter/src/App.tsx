import { useRoomStatus } from "@baasi/baasi-react-sdk";
import { PreJoinScreen } from "./components/room/pre-join-screen";
import { Room } from "./components/room/room";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PreJoinScreen />,
  },
  {
    path: "/:roomId",
    element: <Room />,
  },
]);

function App() {
  const roomStatus = useRoomStatus();

  console.log(roomStatus);

  return <RouterProvider router={router} />;
}

export default App;

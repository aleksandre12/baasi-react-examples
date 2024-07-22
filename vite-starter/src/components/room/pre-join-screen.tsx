import { Button } from "../ui/button";
import { PreJoinLayout } from "../pre-join-layout";
import { useCreateRoom } from "@/hooks/use-create-room";
import { useJoinRoom } from "@/hooks/use-join-room";
import { useCall } from "@baasi/baasi-react-sdk";
import { useNavigate } from "react-router-dom";

export const PreJoinScreen = () => {
  const navigate = useNavigate();

  const { connect } = useCall();
  const { mutate: startInstantCall, isPending: isStarting } = useCreateRoom();

  const { mutate: joinRoom, isPending: isJoining } = useJoinRoom();

  return (
    <PreJoinLayout>
      <div className="flex items-center justify-center py-40">
        <Button
          size="lg"
          onClick={() => {
            startInstantCall(undefined, {
              onSuccess: (room) => {
                if (room.data.id) {
                  joinRoom(room.data.id, {
                    onSuccess: (roomRes) => {
                      connect(roomRes.data.accessToken);

                      navigate(`/${room.data.id}`);
                    },
                  });
                }
              },
            });
          }}
          disabled={isStarting || isJoining}
        >
          Start Instant Call
        </Button>
      </div>
    </PreJoinLayout>
  );
};

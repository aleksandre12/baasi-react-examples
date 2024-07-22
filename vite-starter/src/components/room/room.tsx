import { useCall, useLocalParticipant } from "@baasi/baasi-react-sdk";
import { PreJoinLayout } from "../pre-join-layout";
import { useJoinRoom } from "@/hooks/use-join-room";
import { useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { SpeakerView } from "./speaker-view";

export const Room = () => {
  const params = useParams();
  const roomId = params?.roomId;

  const { connect } = useCall();

  const localParticipant = useLocalParticipant();

  const { mutate: joinRoom, isPending: isJoining } = useJoinRoom();

  if (localParticipant) {
    return <SpeakerView />;
  }

  return (
    <PreJoinLayout>
      <div className="flex items-start justify-center py-40 gap-12">
        {roomId && (
          <Button
            onClick={() => {
              joinRoom(roomId, {
                onSuccess: (res) => {
                  connect(res.data.accessToken);
                },
              });
            }}
          >
            {isJoining ? "Joining..." : "Join room"}
          </Button>
        )}
      </div>
    </PreJoinLayout>
  );
};

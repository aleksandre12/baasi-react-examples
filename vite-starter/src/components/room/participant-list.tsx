import {
  useMainParticipant,
  useParticipantContext,
} from "@baasi/baasi-react-sdk";
import { Participant } from "./participant";

export function ParticipantList() {
  const { participants } = useParticipantContext();
  const mainParticipant = useMainParticipant();

  if (participants.length === 0) return null; // Don't render this component if there are no remote participants.

  // filter out main participant from the list as its already showing in a spotlight place
  return (
    <div className="absolute right-0 bottom-2 flex flex-col gap-2">
      {participants
        .filter((x) => x.id !== mainParticipant?.id)
        .map((participant) => {
          return <Participant key={participant.id} participant={participant} />;
        })}
    </div>
  );
}

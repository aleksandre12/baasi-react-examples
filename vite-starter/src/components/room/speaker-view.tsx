import { ControlBar } from "./control-bar";
import { MainParticipant } from "./main-participant";
import { ParticipantList } from "./participant-list";

export function SpeakerView() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900">
      <div className="absolute top-0 bottom-0 right-0 left-0">
        <MainParticipant />
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-4">
        <ControlBar />
      </div>

      <ParticipantList />
    </div>
  );
}

import {
  Participant as ParticipantType,
  VideoTrack,
  useIsAudioEnabled,
  useVideoStreams,
} from "@baasi/baasi-react-sdk";
import { MicOff } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Participant({ participant }: { participant: ParticipantType }) {
  const videoStreams = useVideoStreams(participant);
  const videoStream = videoStreams.length > 0 && videoStreams[0];

  const isAudioEnabled = useIsAudioEnabled(participant);

  return (
    <div className="relative rounded-xl overflow-hidden w-80 h-48 bg-slate-800 flex items-center justify-center">
      {!isAudioEnabled && (
        <div className="absolute top-2 right-2">
          <MicOff className="h-4 w-4" />
        </div>
      )}

      {videoStream && videoStream.getVideoTracks().length > 0 ? (
        <VideoTrack stream={videoStream} participant={participant} />
      ) : (
        <Avatar>
          <AvatarImage />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

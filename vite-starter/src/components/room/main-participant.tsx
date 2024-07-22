import {
  useIsAudioEnabled,
  useIsVideoEnabled,
  useVideoStreams,
  useMainParticipant,
} from "@baasi/baasi-react-sdk";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MicOffIcon } from "lucide-react";
import { VideoTrack } from "./video-track";

export function MainParticipant() {
  // TODO: considering main participant is always remote
  const mainParticipant = useMainParticipant();

  const videoStreams = useVideoStreams(mainParticipant);
  const videoStream = videoStreams.length > 0 ? videoStreams[0] : undefined;

  const isAudioEnabled = useIsAudioEnabled(mainParticipant);
  const isVideoEnabled = useIsVideoEnabled(mainParticipant);

  if (!mainParticipant) {
    return (
      <div className="flex justify-center items-center h-full bg-orange/30">
        You are alone.
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {!isAudioEnabled && (
        <div className="absolute top-8 right-8">
          <MicOffIcon className="h-4 w-4 text-white" />
        </div>
      )}

      <>
        {isVideoEnabled ? (
          <VideoTrack stream={videoStream} />
        ) : (
          <Avatar className="h-14 w-14">
            <AvatarImage />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}
      </>
    </div>
  );
}

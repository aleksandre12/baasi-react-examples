import { Button } from "../ui/button";
import {
  useCall,
  useLocalAudioToggle,
  useLocalVideoToggle,
} from "@baasi/baasi-react-sdk";
import {
  MicIcon,
  MicOff,
  PhoneIcon,
  VideoIcon,
  VideoOffIcon,
} from "lucide-react";

export function ControlBar() {
  const { disconnect } = useCall();

  const [isVideoEnabled, toggleVideo] = useLocalVideoToggle();
  const [isAudioEnabled, toggleAudio] = useLocalAudioToggle();

  return (
    <div className="flex gap-4">
      <Button
        variant={isAudioEnabled ? "secondary" : "destructive"}
        onClick={toggleAudio}
      >
        {isAudioEnabled ? (
          <MicIcon className="w-4 h-4" />
        ) : (
          <MicOff className="w-4 h-4" />
        )}
      </Button>

      <Button
        variant={isVideoEnabled ? "secondary" : "destructive"}
        onClick={toggleVideo}
      >
        {isVideoEnabled ? (
          <VideoIcon className="w-4 h-4" />
        ) : (
          <VideoOffIcon className="w-4 h-4" />
        )}
      </Button>

      <Button
        variant="destructive"
        onClick={() => {
          disconnect();
        }}
      >
        <PhoneIcon className="w-4 h-4 mx-2" />
      </Button>
    </div>
  );
}

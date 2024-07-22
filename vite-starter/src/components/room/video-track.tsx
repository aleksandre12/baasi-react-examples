import React, { useEffect } from "react";

interface VideoTrackProps {
  stream?: MediaStream;
}

export function VideoTrack({ stream }: VideoTrackProps) {
  const videoEl = React.useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (stream) {
      if (videoEl.current) {
        videoEl.current.muted = true;
        videoEl.current.autoplay = true;

        videoEl.current.srcObject = stream;
      }
    }
  }, [stream, videoEl]);

  return <video ref={videoEl} className="w-full h-full" />;
}

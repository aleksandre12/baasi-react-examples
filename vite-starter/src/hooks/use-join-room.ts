import { joinRoom } from "@/lib/room";
import { useMutation } from "@tanstack/react-query";

export const useJoinRoom = () => {
  return useMutation({
    mutationKey: ["joinRoom"],
    mutationFn: joinRoom,
  });
};

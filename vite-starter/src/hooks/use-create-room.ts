import { createRoom } from "@/lib/room";
import { useMutation } from "@tanstack/react-query";

export const useCreateRoom = () => {
  return useMutation({
    mutationKey: ["createRoom"],
    mutationFn: createRoom,
  });
};

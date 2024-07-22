import { APIClient } from "@/services/api";
import {
  ParticipantSignalingProtocol,
  ParticipantTypes,
} from "@baasi/signaling-messages/lib/enums";

export const createRoom = async () => {
  try {
    const res = await APIClient.post<{ data: { id: string } }>("/room", {
      maxP2PSize: 4,
      foreceTurnServer: false,
      forceSFU: false,
      visibility: "PUBLIC",
      startPermission: "ANYONE",
      hasWaitingRoom: false,
    });

    return res.data;
  } catch (error) {
    console.error("Error creating room:", error);

    return { data: { id: undefined } };
  }
};

type JoinRoomParams = {
  name: string;
};

export const joinRoom = async (roomId: string, params?: JoinRoomParams) => {
  try {
    const res = await APIClient.post(
      `/room/${roomId}/participant`,
      {
        type: ParticipantTypes.Registered,
        useOnlyRelayCandidates: false,
        signalingProtocol: ParticipantSignalingProtocol.WebRTC,
        name: params?.name || "Test User",
        forceTurnServer: false,
        monitoringOnly: false,
      },
      {
        headers: {
          Roomid: roomId,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error("Error joining room:", error);
  }
};

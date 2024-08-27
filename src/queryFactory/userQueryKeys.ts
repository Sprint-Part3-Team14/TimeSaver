import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getMyInvitations, getMyProfile } from "src/utils/api";
import type { MyInvitationListResponse, MyProfileResponse } from "src/utils/apiResponseType";

export const userQueryKeys = createQueryKeys("user", {
  current: () => ({
    queryKey: ["currentUser"],
    queryFn: async (): Promise<MyProfileResponse> => await getMyProfile(),
  }),
  invitationList: {
    queryKey: ["myInvitationList"],
    queryFn: async (): Promise<MyInvitationListResponse> => await getMyInvitations({ size: 10 }),
  },
});

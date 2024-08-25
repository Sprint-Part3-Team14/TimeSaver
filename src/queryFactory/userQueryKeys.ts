import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getMyInvitations, getMyProfile } from "src/utils/api";
import { MyInvitationListResponse } from "src/utils/apiResponseType";

export const userQueryKeys = createQueryKeys("user", {
  current: () => ({
    queryKey: ["currentUser"],
    queryFn: async () => await getMyProfile(),
  }),
  invitationList: {
    queryKey: ["myInvitationList"],
    queryFn: async (): Promise<MyInvitationListResponse> => await getMyInvitations({ size: 10 }),
  },
});

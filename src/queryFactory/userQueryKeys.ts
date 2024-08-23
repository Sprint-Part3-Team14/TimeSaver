import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getMyInvitations, getMyProfile } from "src/utils/api";

export const userQueryKeys = createQueryKeys("user", {
  current: () => ({
    queryKey: ["currentUser"],
    queryFn: async () => await getMyProfile(),
  }),
  invitationList: { queryKey: ["myInvitationList"], queryFn: async () => await getMyInvitations({ size: 10 }) },
});

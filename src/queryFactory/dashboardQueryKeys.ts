import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getDashboardDetails, getDashboardInvitations, getDashboards, getMembers } from "src/utils/api";
import { DashboardListResponse, GetMembersResponse } from "src/utils/apiResponseType";
import type { DashboardInvitation, DashboardListSearch, MembersSearch } from "src/utils/apiType";

export const dashboardQueryKeys = createQueryKeys("dashboard", {
  list: (props: DashboardListSearch) => ({
    queryKey: ["dashboardList"],
    queryFn: async (): Promise<DashboardListResponse> => await getDashboards(props),
  }),
  detail: (dashboardId: number) => ({
    queryKey: ["dashboardDetail", dashboardId],
    queryFn: async () => await getDashboardDetails(dashboardId),
  }),
  invitations: (dashboardId: number, props: DashboardInvitation) => ({
    queryKey: ["dashboardInvitations", dashboardId],
    queryFn: async () => await getDashboardInvitations(dashboardId, props),
  }),
  members: (props: MembersSearch) => ({
    queryKey: ["dashboardMembers", props.dashboardId],
    queryFn: async (): Promise<GetMembersResponse> => await getMembers(props),
  }),
});

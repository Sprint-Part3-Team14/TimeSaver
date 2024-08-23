import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getColumns } from "src/utils/api";
import { ColumnsListSearch } from "src/utils/apiType";

export const columnQueryKeys = createQueryKeys("column", {
  list: (dashboardId: number, props: ColumnsListSearch) => ({
    queryKey: ["columnList", dashboardId],
    queryFn: async () => await getColumns(props),
  }),
});

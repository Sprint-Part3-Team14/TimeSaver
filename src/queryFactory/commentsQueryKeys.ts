import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getComments } from "src/utils/api";
import { CommentsListSearch } from "src/utils/apiType";

export const commentQueryKeys = createQueryKeys("comments", {
  list: (cardId: number, query: CommentsListSearch) => ({
    queryKey: ["commentList", cardId],
    queryFn: async () => await getComments(query),
  }),
});

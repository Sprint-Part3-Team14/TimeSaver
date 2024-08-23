import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getCardInformation, getCardList } from "src/utils/api";
import { CardListSearch } from "src/utils/apiType";

export const cardQueryKeys = createQueryKeys("card", {
  list: (columnId: number, props: CardListSearch) => ({
    queryKey: ["cardList", columnId],
    queryFn: async () => await getCardList(props),
  }),
  detail: (cardId: number) => ({
    queryKey: ["cardDetail", cardId],
    queryFn: async () => await getCardInformation(cardId),
  }),
});

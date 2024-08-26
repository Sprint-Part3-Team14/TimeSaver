import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getCardInformation, getCardList } from "src/utils/api";
import type { CardListSearch, DetailCard } from "src/utils/apiType";

export const cardQueryKeys = createQueryKeys("card", {
  list: (columnId: number, props: CardListSearch) => ({
    queryKey: ["cardList", columnId],
    queryFn: async () => await getCardList(props),
  }),
  detail: (cardId: number) => ({
    queryKey: ["cardDetail", cardId],
    queryFn: async (): Promise<DetailCard> => await getCardInformation(cardId),
  }),
});

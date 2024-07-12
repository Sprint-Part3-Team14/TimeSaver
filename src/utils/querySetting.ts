interface QueryObject<T> {
  [key: string]: T | T[] | undefined;
}

export function convertQuery<T>(query: QueryObject<T>): string {
  let convertQuery = "";
  if (query) {
    const queryParams = new URLSearchParams();
    for (const key in query) {
      const vl = query[key];
      if (Array.isArray(vl)) {
        vl.forEach(item => {
          queryParams.append(key, String(item));
        });
      } else if (vl !== undefined && vl !== null) {
        queryParams.append(key, String(vl));
      }
    }
    const returnQuery = queryParams.toString();
    if (returnQuery) {
      convertQuery += `?${returnQuery}`;
    }
  }

  return convertQuery;
}

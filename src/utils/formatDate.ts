function formatData(date: string) {
  const createdAt = new Date(date);

  const createdYear = createdAt.getFullYear();
  const createdMonth = createdAt.getMonth() + 1;
  const createdMonthDate = createdAt.getDate();

  const createdADate = `${createdYear}.${createdMonth}.${createdMonthDate}`;

  return createdADate;
}

export default formatData;

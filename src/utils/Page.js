/// Extra function Bu limitlarni teng taxsimlab chiqarish uchun ishlatiladi

// Yozilgan funksiya user 105 bolsa uni teng taxsimlab
// 11 ta page chiqarib beradi..
export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPageArray = (tPage) => {
  let result = [];
  for (let i = 0; i < tPage; i++) {
    result.push(i + 1);
  }
  return result;
};

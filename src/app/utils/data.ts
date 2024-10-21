export async function getOrderCountFromDB() {
  await new Promise((res) => setTimeout(res, 2000));
  return "order:21";
}
export async function getSalesFromDB() {
  await new Promise((res) => setTimeout(res, 1000));
  return "sales: $10,85557";
}
export async function getProfitFromDB() {
  await new Promise((res) => setTimeout(res, 3000));
  return "sales: $20000";
}

export async function getUser() {
  return {
    isAdmin: true,
    isManager: false,
    id: 101,
  };
}

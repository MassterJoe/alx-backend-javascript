function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  const b1 = `income - ${getCurrentYear()}`;
  const b2 = `gdp-${getCurrentYear()}`;
  const b3 = `capita-${getCurrentYear()}`;

  budget[b1] = income;
  budget[b2] = gdp;
  budget[b3] = capita;

  return budget;
}

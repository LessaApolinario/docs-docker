function formatPrice(price: number): string {
  return format(getNumberFormat(), price);
}

function format(numberFormat: Intl.NumberFormat, number: number): string {
  return numberFormat.format(number);
}

function getNumberFormat(): Intl.NumberFormat {
  return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' });
}

export default formatPrice;

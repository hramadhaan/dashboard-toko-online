/**
 *
 * @param {Number} number
 */

export default function FormatCurrency(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}

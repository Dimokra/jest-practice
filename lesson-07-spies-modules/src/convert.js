import { getRate } from "./currency.js";

export async function convertToRub(amount, code) {
  return amount *  await getRate(code)
}

export function getDiscount(total) {
  if (!total || typeof(total) !== 'number' || total <= 0 ) throw new Error("Keep it for free")
  switch(true) {
    case total < 1000: return 0;
    case total < 2000: return 5;
    case total < 5000: return 10;
    case total >= 5000: return 20;
  }
}

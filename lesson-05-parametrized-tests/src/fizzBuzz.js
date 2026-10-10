export function fizzBuzz(n) {

    if (!n || typeof n !== "number" || n < 1) {
    throw new Error("GIVE ME A NUMBER");
  }
  return (n % 3 ? '' : 'Fizz') + (n % 5 ? '' : 'Buzz') || (n + '')
}

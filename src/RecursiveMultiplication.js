export default function Recursive() {
  const inp = 999;
  let count = 0;
  function calculateMultiplicative(val) {
    if (val <= 10) {
      return count;
    }

    const value = val
      .toString()
      .split("")
      .reduce((acc, cur) => acc * cur);
    count++;
    return calculateMultiplicative(value);
  }

  return <>{calculateMultiplicative(inp)}</>;
}

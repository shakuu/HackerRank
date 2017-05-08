module.exports = function minmaxsum(values) {
  const initial = values.reduce((sum, value) => sum += value, 0);
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  values.forEach(value => {
    const current = initial - value;
    max = current > max ? current : max;
    min = current < min ? current : min;
  });
  console.log(min, max);
};

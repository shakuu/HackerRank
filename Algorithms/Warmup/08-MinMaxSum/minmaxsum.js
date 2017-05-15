module.exports = function minmaxsum(values) {
  const initial = values.reduce((sum, value) => sum += value, 0);
  const result = values.reduce((res, val) => {
    return {
      max: initial - val > res.max ? initial - val : res.max,
      min: initial - val < res.min ? initial - val : res.min
    };
  }, { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER });
  console.log(result.min, result.max);
};

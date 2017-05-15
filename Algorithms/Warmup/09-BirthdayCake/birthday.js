module.exports = function birthdayCake(heights) {
  console.log(heights.reduce((result, height) => {
    return {
      max: height > result.max ? height : result.max,
      count: height > result.max ? 1 : height === result.max ? result.count + 1 : result.count
    };
  }, { max: Number.MIN_SAFE_INTEGER, count: 0 }).count);
};

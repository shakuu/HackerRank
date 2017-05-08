module.exports = function staircase(size) {
  for (let row = 1; row <= size; row++) {
    const spaceIndex = size - row;
    const toLog = Array.from({ length: size })
      .reduce((result, value, index) => {
        result.push(index < spaceIndex ? ' ' : '#');
        return result;
      }, []);
    console.log(toLog.join(''));
  }
};
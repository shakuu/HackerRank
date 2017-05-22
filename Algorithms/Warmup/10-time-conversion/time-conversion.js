module.exports = function timeconversion(input) {
  const chars = input.split('');
  let hour = chars.slice(0, 2).join('');
  let mins = chars.slice(3, 5).join('');
  let secs = chars.slice(6, 8).join('');
  let ampm = chars.slice(8, 9).join('');
  if (hour === '12' && ampm === 'A') {
    hour = '00';
  } else if (hour !== '12' && ampm === 'P') {
    hour = +hour + 12;
    hour = hour >= 24 ? hour - 24 : hour;
  } 
  console.log(`${hour}:${mins}:${secs}`);
};

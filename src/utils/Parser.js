const Parser = input => {
  const [month, day] = input.split(',');
  return [month, day];
};

export default Parser;

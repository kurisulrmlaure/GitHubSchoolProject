const getRandomCode = () => {
  const codes = ['ABC123', 'DEF456', 'GHI789'];
  return codes[Math.floor(Math.random() * codes.length)];
};

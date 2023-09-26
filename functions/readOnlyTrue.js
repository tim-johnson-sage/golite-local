export default targetVal => {
  if (targetVal !== true) { 
    return [
      {
        message: '"href" should always has "readOnly: true"',
      },
    ];
  }
};
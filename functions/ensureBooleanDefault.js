export default (item, _, ctx) => {

  if (
    item.type !== 'boolean'
  ) { return; }

  // if the boolean item doesn't have default
  // throw an error
  if (item.default === undefined || !( item.default === false ||  item.default ===  true)) {
    return [
      {
        message: `${ctx.path ? ctx.path.join('.') : 'property'} must have default boolean value`,
      }
    ];
  }
};
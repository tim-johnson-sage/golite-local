export default (item, _, ctx) => {

  var override = ctx.path.includes('schema') || (ctx.path.includes('components') && ctx.path.includes('schemas'));
  if (override && (item === true || item === false  )) {
    return;
  }
  else {
    return [
      {
        message: `${ctx.path ? ctx.path.join('.') : 'property'} must be at schema level and only boolean values allowed`,
      }
    ];
  }

}
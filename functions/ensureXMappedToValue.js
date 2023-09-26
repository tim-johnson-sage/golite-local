export default (item, _, ctx) => {

  if (item['x-mappedTo'] !== undefined && item['x-mappedTo'] === null) {
    return [
      {
        message: `${ctx.path ? ctx.path.join('.') : 'property'} is missing or has a null x-mappedTo value`,
      }
    ]
  }
}
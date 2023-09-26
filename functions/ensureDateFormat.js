export default (item, _, ctx) => {

  const dateRegex = /Date$/i;
  const dateTimeRegex = /DateTime$/i;

  var isDateProperty = ctx.path[ctx.path.length - 1].match(dateRegex);
  var isDateTimeProperty = ctx.path[ctx.path.length - 1].match(dateTimeRegex);

  if (isDateProperty) {
    if (
        item.format != undefined &&
        item.type === 'string' &&
        item.format === 'date') { return }
    else {
      return [
        {
          message: `${ctx.path ? ctx.path.join('.') : 'property'} must have 'type: string' and 'format: date'`,
        }
      ]
    }
  }

  if (isDateTimeProperty) {
    if (
        item.format != undefined &&
        item.type === 'string' &&
        item.format === 'date-time') { return }
    else {
      return [
        {
          message: `${ctx.path ? ctx.path.join('.') : 'property'} must have 'type: string' and 'format: date-time'`,
        }
      ]
    }
  }
}
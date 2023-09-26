export default (item, _, ctx) => {

  var isPostOrPatchRequestBody = (ctx.path.includes('post') || ctx.path.includes('patch')) &&
                                 ctx.path.includes('requestBody');

  if ( isPostOrPatchRequestBody ) {
    return;
  }

  if (
    ctx.path.join('.').includes('properties.properties') ||
    // skip if this is an example/examples
    ctx.path.includes('example') ||
    ctx.path.includes('examples') ||
    // objects are not primitive values
    item.type === 'object' ||
    // binary values are not primitive values
    item.format === 'binary' ||
    // arrays can be skipped unless they are string arrays
    (item.type === 'array' && item.items && item.items.type !== 'string') ||
    // skip if the property as a reference
    item['$ref'] !== undefined ||
    item.allOf !== undefined ||
    // if this is a list 
    item.oneOf !== undefined
  ) { return }
  // check if the property is nullable
  if(item.nullable !== undefined && item.nullable === true  ) {
    // check if item.example is null
    if(item.example !== undefined && item.example === null) {
      return
    }
  }
  // if the item does not have an example
  // throw an error
  if (!item.example && item.example !== false) {
    return [
      {
        message: `${ctx.path ? ctx.path.join('.') : 'property'} is missing example`,
      }
    ]
  }
}
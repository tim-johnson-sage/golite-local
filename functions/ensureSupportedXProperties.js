export default (item, opt, ctx) => {

  const xPropRegex = /^x-/i;

  //allowed x-* from
  //https://intacct.atlassian.net/wiki/spaces/~397816204/pages/1369407790/YAML+Schema+for+NextGen+API+Objects
  var allowedXProperties =  [
    'x-mappedToKey',
    'x-mappedToPrefix',
    'x-object',
    'x-mappedTo',
    'x-idempotence',
    'x-mappedToValues',
    'x-mappedToType',
    'x-mutable',
    'x-ownedBy',
    'x-delimiter',
    'x-useForDocType',
    'x-uriPatternSuffix',
    'x-supportedQueryStringKeys',
    'x-schemaOverride',
    'x-documentationFlags',
    'x-mappedToLocationKey'
  ];

  //if the property starts with 'x-' and is included in allowed Properties
  // return normally; return with error message otherwise
  for (const val of ctx.path) {
    if (val.match && val.match(xPropRegex) && allowedXProperties.includes(val)) {
      return;
    }
  }
  return [
    {
      message: `${ctx.path ? ctx.path.join('.') : 'property'} un-supported x-* property`,
    }
  ];
}
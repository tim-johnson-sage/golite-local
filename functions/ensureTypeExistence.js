export default (item, _, ctx) => {


  var isPostorPatchRequestBody = (ctx.path.includes('post') || ctx.path.includes('patch')) && ctx.path.includes('requestBody');

  if (isPostorPatchRequestBody || item.type != undefined) {
    return;
  }

  //oneOf is weekly typed, we cannot force it; properties under components/schemas will be skipped
  //but indirectly verifed from media content in paths operation
  var typeCheckOverride = item.oneOf != undefined || (ctx.path.includes('components') && ctx.path.includes('schemas')) ;

  if (typeCheckOverride)
  {
    return;
  }

  return [
    {
      message: `${ctx.path ? ctx.path.join('.') : 'property'} must have type attribute`,
    }
  ];

}
// USAGE:
// const nameOfFinalSchema = mergedYupSchemas(schema1, schema2, schema3, etc)
const mergedYupSchemas = (...schemas) => {
    // TODO STEPHANE: Make unit test for merged schemas and error gestion
    const [firstSchema, ...rest] = schemas
    
    const finalMergedSchemas = rest.reduce(
      (mergedSchemas, schema) => mergedSchemas.concat(schema),
      firstSchema
    )
    
    return finalMergedSchemas
  }

  module.exports = {
      mergedYupSchemas
  }
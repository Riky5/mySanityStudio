import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import project from './project'
import person from './person'
import education from './education'
import tech from './tech'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    project,
    person,
    education,
    tech,
  ]),
})

import app from '../../server/app'

describe('CRUD operation on \'CollectionType\' model', () => {
  const model = app.service('collection-type').Model

  it('Create', async () => {
    await model.create({
      type: 'test'
    })
  })

  it('Read', async () => {
    await model.findOne({
      where: {
        type: 'test'
      }
    })
  })

  it('Delete', async () => {
    await model.destroy({
      where: { type: 'test' }
    })
  })
})

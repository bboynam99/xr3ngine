import app from '../../app'

describe('CRUD operation on \'Static Resource Type\' model', () => {
  const model = app.service('static-resource-type').Model

  it('Create', () => {
    model.create({
      type: 'test'
    })
  })

  it('Read', () => {
    model.findOne({
      where: {
        type: 'test'
      }
    })
  })

  it('Delete', () => {
    model.destroy({
      where: { type: 'test' }
    })
  })
})

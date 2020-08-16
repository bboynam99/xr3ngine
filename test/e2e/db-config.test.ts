import { db } from '@xrengine/server/db-config'

describe('db-config', () => {
  it('should export db url', () => {
    expect(db.url.startsWith('mysql://'))
  })
})

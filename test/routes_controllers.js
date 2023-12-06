describe('app routes', () => {
  // routes and controllers are 1:1 coupled here
  // routes test
  describe('POST /flowers/create is how to create more random flowers', () => {
    it('if given no arguments it creates 1000 random flowers, equally distributed')
  })
  describe('POST /flowers/share is the custom query route', () => {
    it('should accept json content')
    it('should return json formatted response')
  })
   describe('POST /weeds/create is how to create more random weeds', () => {
    it('if given no arguments it creates 1000 random flowers, non-equally distributed')
  })
  describe('POST /weeds/share is the custom query route', () => {
    it('should accept json content')
    it('should return json formatted response')
  })
})
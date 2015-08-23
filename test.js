var expect = require('chai').expect
  , gt = require('./')

describe('gt', function() {
  it('should filter less than value', function() {
    expect(gt('val', 100)({ val:  50 })).to.be.eql(false)
    expect(gt('val', 100)({ val: 150 })).to.be.eql(true)
  })
})
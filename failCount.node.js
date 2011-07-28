var it = require('it-is')
  , Report = require('test-report')
  , test = module.exports
  , assert = require('assert')

;(function(){

  var r = Report(__filename)
    , err = new Error("EXAMPLE ERROR")
    , err2 = new Error("EXAMPLE ERROR")

  r.test('error', err)
  r.test('error', err2)

  it(r.report).has({
    failureCount: 2
  , tests: [{
      failureCount: 2
    }]
  })

})()

;(function(){

  var r = Report(__filename)

  r.test('pass')

  it(r.report).has({
    failureCount: 0
  , tests: [{
      failureCount: 0
    }]
  })

})()

;(function(){

  var r = Report(__filename)

  it(r.report).has({
    failureCount: 0
  , tests: []
  })

})()

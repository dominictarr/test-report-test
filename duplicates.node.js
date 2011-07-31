
var it = require('it-is').style('colour')
  , Reporter = require('test-report')
  , helper = require('test-helper')
  , test = module.exports
  , assert = require('assert')

exports ['don\'t duplicate tests'] = function () {

  var reporter = new Reporter('do not dupe')
  
  reporter
    .test('one')
    .subreport('one')
    
  it(reporter.report).has({
    name: 'do not dupe'
  , tests: it.property('length', 1).has([{
      name: 'one'
    , tests: []
    }])
  })
}

helper.runSync(exports)
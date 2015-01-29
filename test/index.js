var f1Parser = require( './..' );
var test = require( 'tape' );

test( 'parsing', function( t ) {

  t.plan( 3 );

  var testData = {};
  var writeData = {

    var1: 1,
    var2: 2,
    var3: 3
  };

  var parser = new f1Parser( [

    parseFunc.bind( undefined, 'var1' ),
    parseFunc.bind( undefined, 'var2' )
  ]);

  parser.teach( parseFunc.bind( undefined, 'var3' ) );

  parser.parse( testData, writeData );

  t.equal( testData.var1, writeData.var1, 'variable 1 set properly' );
  t.equal( testData.var2, writeData.var2, 'variable 2 set properly' );
  t.equal( testData.var3, writeData.var3, 'variable 3 set properly' );

  function parseFunc( variable, item, data ) {

    item[ variable ] = data[ variable ];
  }
});
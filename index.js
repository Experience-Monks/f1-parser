module.exports = function getParser( parsers ) {

  var parserMethods = [];

  var parser = {

    teach: function( parser ) {

      parserMethods.push( parser );
    },

    parse: function( item, data ) {

      parserMethods.forEach( function( method ) {

        method( item, data );
      });
    }
  };

  if( parsers ) {

    parsers.forEach( function( parserFunc ) {

      parser.teach( parserFunc );
    });
  }

  return parser;
};
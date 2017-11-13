log("modC load start");
define([
  'http://javascript150.bitbucket.org/05-12/library/libA.js',
  'http://javascript150.bitbucket.org/05-12/modules/modB.js'
  ], function() {
    log("modC load complete");
    return { name: "modC" };
  }
);


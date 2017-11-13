log("modB load start");
define([
  'http://javascript150.bitbucket.org/05-12/library/libA.js',
  'http://javascript150.bitbucket.org/05-12/library/libC.js'
  ], function() {
    log("modB load complete");
    return { name: "modB" };
  }
);


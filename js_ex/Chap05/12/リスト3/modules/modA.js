log("modA load start");
define([
  'http://javascript150.bitbucket.org/05-12/library/libA.js',
  'http://javascript150.bitbucket.org/05-12/library/libB.js'
  ], function() {
    log("modA load complete");
    return { name: "modA" };
  }
);


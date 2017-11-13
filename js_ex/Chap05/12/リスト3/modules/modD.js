log("modD load start");
define([
  'http://javascript150.bitbucket.org/05-12/library/libD.js',
  'http://javascript150.bitbucket.org/05-12/modules/modA.js'
  ], function() {
    log("modD load complete");
    return { name: "modD" };
  }
);


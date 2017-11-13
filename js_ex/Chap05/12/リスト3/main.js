require([
  'http://javascript150.bitbucket.org/05-12/modules/modA.js',
  'http://javascript150.bitbucket.org/05-12/modules/modB.js',
  'http://javascript150.bitbucket.org/05-12/modules/modC.js',
  'http://javascript150.bitbucket.org/05-12/modules/modD.js'
],
function(modA, modB, modC, modD) {
  log("all loaded");
});


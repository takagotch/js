function heavyProcess() {
  log("libB load start");
  var time = 2000;
  var begin, now;
  begin = now = (new Date()).getTime();
  while(now < begin + time) {
    now = (new Date()).getTime();
  }
  log("libB load complete");
}
heavyProcess();


set TMP=%~dp0qunit/index.html
set URL=file:///%TMP:¥=/%
cd %~dp0
..¥test_lib¥phantom¥pahntomjs.exe run_qunit.js %URL%


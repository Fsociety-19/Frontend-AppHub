@ECHO OFF
SET /P NOMBRE=Escribe url git:
git init
git add .
git commit -m "Init"
git remote add origin %NOMBRE%
git push -u origin master
git push origin master
pause
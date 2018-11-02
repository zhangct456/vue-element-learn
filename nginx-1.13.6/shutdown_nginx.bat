@echo off
echo 正在结束Nginx及其子进程……
taskkill /T /F /IM  nginx.exe
echo 操作完成!
pause
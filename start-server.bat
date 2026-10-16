@echo off
cd /d "%~dp0"
echo サーバーを起動中...
start "" "http://localhost:3000/index.html"
npx serve .
pause

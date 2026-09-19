@echo off
title Launching AI Smart City Digital Twin
echo ========================================================
echo  Launching AI Smart City Digital Twin Monorepo
echo ========================================================
echo Starting Backend Server on port 5000...
start "Smart City Backend" cmd /k "cd /d %~dp0backend && npm start"

echo Starting Frontend Dashboard on port 5173...
start "Smart City Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"

echo Opening browser...
timeout /t 3 >nul
start http://localhost:5174
echo ========================================================
echo  Digital Twin Application is active!
echo ========================================================
pause

@echo off
chcp 65001 > nul
title Git Auto Commit and Push

echo ========================================
echo    Git Auto Commit and Push Script
echo ========================================
echo.

cd /d "%~dp0"

echo [1/4] Adding all changes to staging...
git add .
if %errorlevel% neq 0 (
    echo Error: Failed to add files
    pause
    exit /b 1
)
echo Done.
echo.

echo [2/4] Creating commit...
set datetime=%date:~0,4%-%date:~5,2%-%date:~8,2% %time:~0,2%:%time:~3,2%:%time:~6,2%
set datetime=%datetime: =0%
git commit -m "Auto commit: %datetime%"
if %errorlevel% neq 0 (
    echo No changes to commit or commit failed
    pause
    exit /b 1
)
echo Done.
echo.

echo [3/4] Pushing to remote repository...
git push
if %errorlevel% neq 0 (
    echo Error: Failed to push to remote
    pause
    exit /b 1
)
echo Done.
echo.

echo [4/4] Verifying push...
git status
echo.

echo ========================================
echo    Successfully pushed to remote!
echo ========================================
echo.
pause

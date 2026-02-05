@echo off
set "PATH=%PATH%;C:\Program Files\Git\cmd"
"C:\Program Files\GitHub CLI\gh.exe" auth setup-git
"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "Deployment_Updates"
"C:\Program Files\Git\cmd\git.exe" remote remove origin
"C:\Program Files\Git\cmd\git.exe" remote add origin https://github.com/Founditmarketing/1st-insurance-.git
"C:\Program Files\Git\cmd\git.exe" branch -M main
"C:\Program Files\Git\cmd\git.exe" push -u origin main

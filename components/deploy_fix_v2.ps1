$env:Path = "C:\Program Files\Git\cmd;" + $env:Path
Write-Host "Set PATH to include Git."

Set-Location ..
Write-Host "Changed directory to project root."

& "C:\Program Files\GitHub CLI\gh.exe" auth setup-git
if ($LASTEXITCODE -ne 0) { Write-Error "gh auth setup-git failed"; exit 1 }

git add .
git commit -m "Fix Vercel routing: Add SPA rewrites"
git push origin main

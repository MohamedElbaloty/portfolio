# Auto-push script for GitHub (PowerShell)
# This script automatically commits and pushes changes to GitHub

Write-Host "🔄 Starting auto-push to GitHub..." -ForegroundColor Cyan

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "❌ Error: Git repository not initialized" -ForegroundColor Red
    exit 1
}

# Add all changes
git add .

# Check if there are changes to commit
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "✅ No changes to commit" -ForegroundColor Green
    exit 0
}

# Commit changes
$commitMsg = "Auto-commit: Update mobile development courses images"
git commit -m $commitMsg

# Push to GitHub
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
$branch = git branch --show-current
git push origin $branch

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
} else {
    Write-Host "❌ Error pushing to GitHub" -ForegroundColor Red
    exit 1
}


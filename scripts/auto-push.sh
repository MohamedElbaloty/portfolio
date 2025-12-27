#!/bin/bash

# Auto-push script for GitHub
# This script automatically commits and pushes changes to GitHub

echo "🔄 Starting auto-push to GitHub..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Git repository not initialized"
    exit 1
fi

# Add all changes
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "✅ No changes to commit"
    exit 0
fi

# Commit changes
COMMIT_MSG="Auto-commit: Update mobile development courses images"
git commit -m "$COMMIT_MSG"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main || git push origin master

echo "✅ Successfully pushed to GitHub!"


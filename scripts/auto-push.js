#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔄 Starting auto-push to GitHub...');

// Check if git is initialized
if (!fs.existsSync(path.join(process.cwd(), '.git'))) {
  console.error('❌ Error: Git repository not initialized');
  process.exit(1);
}

try {
  // Add all changes
  execSync('git add .', { stdio: 'inherit' });
  
  // Check if there are changes to commit
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf-8' });
    if (!status.trim()) {
      console.log('✅ No changes to commit');
      process.exit(0);
    }
  } catch (e) {
    // If status check fails, continue anyway
  }
  
  // Commit changes
  const commitMsg = process.argv[2] || 'Auto-commit: Update mobile development courses images';
  execSync(`git commit -m "${commitMsg}"`, { stdio: 'inherit' });
  
  // Get current branch
  const branch = execSync('git branch --show-current', { encoding: 'utf-8' }).trim();
  
  // Push to GitHub
  console.log('📤 Pushing to GitHub...');
  execSync(`git push origin ${branch}`, { stdio: 'inherit' });
  
  console.log('✅ Successfully pushed to GitHub!');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}


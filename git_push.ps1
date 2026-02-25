try {
    Write-Output "Initializing git..."
    git init | Out-File push-log.txt -Append
    git add . | Out-File push-log.txt -Append
    
    # Check if commit exists or is needed
    git commit -m "chore: setup for production deployment" | Out-File push-log.txt -Append
    
    git branch -M main | Out-File push-log.txt -Append
    
    # Remove origin if it exists, then add
    git remote remove origin 2>$null
    git remote add origin https://github.com/Dinesh0189/expense-tracker.git | Out-File push-log.txt -Append
    
    Write-Output "Pushing..."
    git push -u origin main --force 2>&1 | Out-File push-log.txt -Append
    
    Write-Output "Done!"
} catch {
    Write-Output $_.Exception.Message | Out-File push-log.txt -Append
}

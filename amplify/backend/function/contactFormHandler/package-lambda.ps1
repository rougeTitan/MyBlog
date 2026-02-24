# Lambda Function Deployment Package Script
# This script creates a ZIP file ready for AWS Lambda deployment

Write-Host "Creating Lambda deployment package..." -ForegroundColor Green

# Navigate to the Lambda function directory
$lambdaDir = "amplify\backend\function\contactFormHandler"
Set-Location $lambdaDir

# Install dependencies
Write-Host "`nInstalling dependencies..." -ForegroundColor Yellow
npm install

# Create deployment package
Write-Host "`nCreating ZIP package..." -ForegroundColor Yellow
$zipFile = "..\..\..\..\lambda-deployment.zip"

# Remove old ZIP if exists
if (Test-Path $zipFile) {
    Remove-Item $zipFile
}

# Create ZIP with all required files
Compress-Archive -Path "index.js", "package.json", "node_modules" -DestinationPath $zipFile

Write-Host "`nSuccess! Deployment package created: lambda-deployment.zip" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Go to AWS Lambda Console" -ForegroundColor White
Write-Host "2. Select your function: portfolio-contact-form" -ForegroundColor White
Write-Host "3. Click 'Upload from' -> '.zip file'" -ForegroundColor White
Write-Host "4. Upload the file: lambda-deployment.zip" -ForegroundColor White
Write-Host "5. Click 'Save'" -ForegroundColor White

# Return to project root
Set-Location ..\..\..\..\

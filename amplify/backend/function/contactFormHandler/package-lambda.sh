# Lambda Function Package Script (Bash)
# This script creates a ZIP file ready for AWS Lambda deployment

echo "Creating Lambda deployment package..."

# Navigate to the Lambda function directory
cd "amplify/backend/function/contactFormHandler"

# Install dependencies
echo "Installing dependencies..."
npm install

# Create deployment package
echo "Creating ZIP package..."
zip_file="../../../../lambda-deployment.zip"

# Remove old ZIP if exists
rm -f "$zip_file"

# Create ZIP with all required files
zip -r "$zip_file" index.js package.json node_modules/

echo "Success! Deployment package created: lambda-deployment.zip"
echo ""
echo "Next steps:"
echo "1. Go to AWS Lambda Console"
echo "2. Select your function: portfolio-contact-form"
echo "3. Click 'Upload from' -> '.zip file'"
echo "4. Upload the file: lambda-deployment.zip"
echo "5. Click 'Save'"

# Return to project root
cd ../../../..

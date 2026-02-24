# AWS Contact Form Setup Guide

This guide will help you set up a serverless contact form using AWS services with your Amplify deployment.

## Prerequisites

- AWS Account with access to Lambda, API Gateway, and SES
- AWS CLI installed (optional but recommended)
- Your portfolio website deployed on AWS Amplify

## Step 1: Set Up AWS SES (Simple Email Service)

### 1.1 Verify Your Email Address

1. Go to **AWS SES Console** (https://console.aws.amazon.com/ses/)
2. Select your region (recommend `us-east-1` for consistency)
3. Click **Verified identities** in the left menu
4. Click **Create identity**
5. Select **Email address**
6. Enter: `siddheshdilipkumar@gmail.com`
7. Click **Create identity**
8. Check your Gmail inbox and click the verification link

### 1.2 Request Production Access (Important!)

- By default, SES is in "sandbox mode" which only allows sending to verified addresses
- To receive emails from anyone:
  1. Go to **Account dashboard** in SES
  2. Click **Request production access**
  3. Fill out the form (usually approved within 24 hours)
  4. Until approved, you can only test with verified email addresses

## Step 2: Create IAM Role for Lambda

1. Go to **IAM Console** (https://console.aws.amazon.com/iam/)
2. Click **Roles** → **Create role**
3. Select **AWS service** → **Lambda**
4. Click **Next**
5. Attach these policies:
   - `AWSLambdaBasicExecutionRole` (for CloudWatch Logs)
   - `AmazonSESFullAccess` (for sending emails)
6. Click **Next**
7. Name: `portfolio-contact-form-role`
8. Click **Create role**

## Step 3: Create Lambda Function

### 3.1 Create the Function

1. Go to **Lambda Console** (https://console.aws.amazon.com/lambda/)
2. Click **Create function**
3. Select **Author from scratch**
4. Function name: `portfolio-contact-form`
5. Runtime: **Node.js 20.x** (or latest available)
6. Architecture: **x86_64**
7. Under **Permissions**, choose **Use an existing role**
8. Select: `portfolio-contact-form-role`
9. Click **Create function**

### 3.2 Upload Function Code

**Option A: Upload ZIP file (Recommended)**

1. In your project, navigate to `amplify/backend/function/contactFormHandler/`
2. Install dependencies: `npm install`
3. Create a ZIP file containing:
   - `index.js`
   - `package.json`
   - `node_modules/` folder
4. In Lambda console, click **Upload from** → **.zip file**
5. Upload your ZIP file
6. Click **Save**

**Option B: Manual copy (for testing)**

1. In your function, click **Code** tab
2. Delete the default code in `index.js`
3. Copy the contents from `amplify/backend/function/contactFormHandler/index.js`
4. Paste it into the Lambda editor
5. Click **Deploy**
6. Note: You'll need to add the `@aws-sdk/client-ses` layer separately

### 3.3 Configure Environment Variables

1. Click **Configuration** tab → **Environment variables**
2. Click **Edit** → **Add environment variable**
3. Add these variables:
   - Key: `SENDER_EMAIL`, Value: `siddheshdilipkumar@gmail.com`
   - Key: `RECIPIENT_EMAIL`, Value: `siddheshdilipkumar@gmail.com`
4. Click **Save**

### 3.4 Install Dependencies

If you uploaded a ZIP file with `node_modules/`, you're all set!

If you copied code manually, AWS SDK v3 needs to be added:

1. Click **Code** tab
2. Scroll down to **Layers**
3. Click **Add a layer**
4. Choose **AWS layers**
5. Select **AWSSDKPandas** or create custom layer with `@aws-sdk/client-ses`
6. Or simply upload the ZIP file with dependencies included (recommended)

## Step 4: Create API Gateway

### 4.1 Create REST API

1. Go to **API Gateway Console** (https://console.aws.amazon.com/apigateway/)
2. Click **Create API**
3. Choose **REST API** (not private)
4. Click **Build**
5. Select **New API**
6. API name: `portfolio-contact-api`
7. Description: `Contact form API for portfolio website`
8. Endpoint Type: **Regional**
9. Click **Create API**

### 4.2 Create Resource

1. Click **Actions** → **Create Resource**
2. Resource Name: `contact`
3. Check **Enable API Gateway CORS**
4. Click **Create Resource**

### 4.3 Create POST Method

1. Select the `/contact` resource
2. Click **Actions** → **Create Method**
3. Select **POST** from dropdown
4. Click the checkmark ✓
5. Integration type: **Lambda Function**
6. Check **Use Lambda Proxy integration**
7. Lambda Region: Select your region (e.g., `us-east-1`)
8. Lambda Function: `portfolio-contact-form`
9. Click **Save**
10. Click **OK** on the permission prompt

### 4.4 Enable CORS

1. Select the `/contact` resource
2. Click **Actions** → **Enable CORS**
3. Keep default settings
4. Click **Enable CORS and replace existing CORS headers**
5. Click **Yes, replace existing values**

### 4.5 Deploy API

1. Click **Actions** → **Deploy API**
2. Deployment stage: **[New Stage]**
3. Stage name: `prod`
4. Click **Deploy**
5. **Copy the Invoke URL** (looks like: `https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/prod`)

## Step 5: Update Your Next.js Application

### 5.1 Add Environment Variable

1. Create `.env.local` file in your project root:

```bash
NEXT_PUBLIC_CONTACT_API_URL=https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/prod/contact
```

Replace with your actual API Gateway URL + `/contact`

### 5.2 Update Amplify Environment Variables

1. Go to **AWS Amplify Console**
2. Select your app
3. Click **Environment variables** in the left menu
4. Click **Manage variables**
5. Add:
   - Key: `NEXT_PUBLIC_CONTACT_API_URL`
   - Value: `https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/prod/contact`
6. Click **Save**

### 5.3 Deploy Changes

```bash
git add .
git commit -m "Add contact form API integration"
git push
```

Amplify will automatically redeploy your site.

## Step 6: Test Your Contact Form

### 6.1 Test Locally

1. Add the API URL to `.env.local`
2. Run: `npm run dev`
3. Go to: http://localhost:3000/contact
4. Fill out the form and submit
5. Check your Gmail for the message

### 6.2 Test Production

1. After Amplify deployment completes
2. Visit your live site's contact page
3. Submit a test message
4. Check your Gmail

## Troubleshooting

### Form submission fails with CORS error

- Ensure CORS is enabled in API Gateway
- Verify the Lambda function returns proper CORS headers
- Redeploy the API after CORS changes

### Email not received

- Check CloudWatch Logs for the Lambda function
- Verify your email is verified in SES
- If in SES sandbox mode, both sender and recipient must be verified
- Check Gmail spam folder

### 403 Forbidden error

- Verify API Gateway is deployed to `prod` stage
- Check Lambda has proper IAM permissions for SES
- Ensure API key is not required in API Gateway

### Lambda timeout

- Increase timeout in Lambda Configuration → General configuration (default 3 seconds should be enough)

## Cost Estimate

- **Lambda**: First 1M requests/month are free
- **API Gateway**: First 1M API calls/month are free
- **SES**: First 62,000 emails/month are free (if sending from EC2/Lambda)
- **Expected cost for personal portfolio**: $0/month (within free tier)

## Security Best Practices

1. **Rate Limiting**: Consider adding rate limiting to prevent spam
2. **Captcha**: Add reCAPTCHA for production use
3. **Input Validation**: Lambda function validates inputs
4. **CORS**: Restrict origins in production (update Lambda headers)
5. **Monitoring**: Set up CloudWatch alarms for errors

## Next Steps

1. Request SES production access for unrestricted sending
2. Add reCAPTCHA to prevent spam
3. Set up CloudWatch alarms for monitoring
4. Consider adding email templates in SES
5. Add reply tracking or notification preferences

---

## Quick Reference

**Key Files:**

- Lambda function: `amplify/backend/function/contactFormHandler/index.js`
- Package file: `amplify/backend/function/contactFormHandler/package.json`
- API client: `lib/api.ts`
- Contact form: `app/contact/page.tsx`

**AWS Resources:**

- Lambda: `portfolio-contact-form`
- API Gateway: `portfolio-contact-api`
- IAM Role: `portfolio-contact-form-role`
- SES: Verified identity `siddheshdilipkumar@gmail.com`

**Environment Variables:**

- `NEXT_PUBLIC_CONTACT_API_URL`: Your API Gateway endpoint

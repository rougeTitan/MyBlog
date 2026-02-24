import json
import boto3
import os
from datetime import datetime

ses_client = boto3.client('ses', region_name='us-east-1')  # Change region if needed

def handler(event, context):
    # Handle CORS preflight
    if event['httpMethod'] == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            'body': ''
        }
    
    try:
        # Parse request body
        body = json.loads(event['body'])
        name = body.get('name', '')
        email = body.get('email', '')
        subject = body.get('subject', '')
        message = body.get('message', '')
        
        # Validate inputs
        if not all([name, email, message]):
            return {
                'statusCode': 400,
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                'body': json.dumps({'error': 'Missing required fields'})
            }
        
        # Your verified email address in SES
        sender_email = os.environ.get('SENDER_EMAIL', 'siddheshdilipkumar@gmail.com')
        recipient_email = os.environ.get('RECIPIENT_EMAIL', 'siddheshdilipkumar@gmail.com')
        
        # Compose email
        email_subject = f"Portfolio Contact: {subject}" if subject else f"Portfolio Contact from {name}"
        email_body = f"""
New contact form submission from your portfolio website:

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}

---
Sent: {datetime.now().strftime('%Y-%m-%d %H:%M:%S UTC')}
        """
        
        # Send email via SES
        response = ses_client.send_email(
            Source=sender_email,
            Destination={
                'ToAddresses': [recipient_email]
            },
            Message={
                'Subject': {
                    'Data': email_subject,
                    'Charset': 'UTF-8'
                },
                'Body': {
                    'Text': {
                        'Data': email_body,
                        'Charset': 'UTF-8'
                    }
                }
            },
            ReplyToAddresses=[email]
        )
        
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({
                'message': 'Email sent successfully!',
                'messageId': response['MessageId']
            })
        }
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': 'Failed to send email', 'details': str(e)})
        }

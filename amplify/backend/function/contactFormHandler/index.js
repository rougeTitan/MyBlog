const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const sesClient = new SESClient({ region: process.env.AWS_REGION || "us-east-1" });

exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  try {
    // Parse request body
    const body = JSON.parse(event.body);
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Your verified email address in SES
    const senderEmail = process.env.SENDER_EMAIL || 'siddheshdilipkumar@gmail.com';
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'siddheshdilipkumar@gmail.com';

    // Compose email
    const emailSubject = subject ? `Portfolio Contact: ${subject}` : `Portfolio Contact from ${name}`;
    const emailBody = `
New contact form submission from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject || 'N/A'}

Message:
${message}

---
Sent: ${new Date().toISOString()}
    `;

    // Send email via SES
    const command = new SendEmailCommand({
      Source: senderEmail,
      Destination: {
        ToAddresses: [recipientEmail]
      },
      Message: {
        Subject: {
          Data: emailSubject,
          Charset: 'UTF-8'
        },
        Body: {
          Text: {
            Data: emailBody,
            Charset: 'UTF-8'
          }
        }
      },
      ReplyToAddresses: [email]
    });

    const response = await sesClient.send(command);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Email sent successfully!',
        messageId: response.MessageId
      })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'Failed to send email', 
        details: error.message 
      })
    };
  }
};

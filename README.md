Automated Bulk Email Sender with MySQL Integration

This project automates the sending of personalized bulk emails to recruiters using Node.js. It reads recruiter information (name, company, email, and position) from a CSV file and sends customized emails using the Gmail SMTP service via nodemailer. Each email contains personalized content tailored to the recipient.
Furthermore, the project stores logs of successfully sent emails in a MySQL database, capturing the recruiter’s name, company, email address, and job position. This ensures proper tracking of email deliveries for future reference.

Key components:
$ Nodemailer: For sending emails.
$ CSV Parser: To read recipient details from a CSV file.
$ MySQL Integration: To log successful email deliveries.

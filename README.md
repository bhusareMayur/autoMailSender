<b>Automated Bulk Email Sender with MySQL Integration</b>

This project automates the sending of personalized bulk emails to recruiters using Node.js. It reads recruiter information (name, company, email, and position) from a CSV file and sends customized emails using the Gmail SMTP service via nodemailer. Each email contains personalized content tailored to the recipient.
Furthermore, the project stores logs of successfully sent emails in a MySQL database, capturing the recruiter’s name, company, email address, and job position. This ensures proper tracking of email deliveries for future reference.

Key components:<br>
$ Nodemailer: For sending emails.<br>
$ CSV Parser: To read recipient details from a CSV file.<br>
$ MySQL Integration: To log successful email deliveries.<br>
<br>
![Mysql table](./screenshots/MySQL_table.png)
![Terminal commands](./screenshots/Terminal_commands.png)
![csv file ](./screenshots/csv_file.png)
![Mail Draft ](./screenshots/mail_draft.png)

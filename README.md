<h1 align="center">📧 Cold Email Sender using Node.js, Gmail SMTP, and MySQL</h1>

<p align="center">A tool to send personalized cold emails using CSV data and log successful deliveries into a MySQL database.</p>

---

## 🔧 Features

<ul>
  <li>Send customized emails to multiple recipients</li>
  <li>Uses Gmail SMTP with <strong>App Passwords</strong></li>
  <li>Stores email logs in a MySQL database</li>
  <li>Personalized email content using CSV data</li>
  <li>Simple configuration and easy to use</li>
</ul>

---

## 📁 Project Structure

<pre>
.
├── data.csv              # CSV file with recipient data
├── mayur.js              # Main script to send emails
├── README.md             # Documentation
├── Screenshots           # Screenshots of mail template
</pre>

---

## 🛠️ Prerequisites

<ul>
  <li><a href="https://nodejs.org/">Node.js</a></li>
  <li><a href="https://www.mysql.com/">MySQL</a></li>
  <li>Gmail account with <strong>App Password</strong> enabled</li>
</ul>

---

## 📦 Install Dependencies

```bash
npm install nodemailer csv-parser mysql2
```

## 📦 MySQL Setup
```bash
CREATE DATABASE email_logs;
```
```bash
USE email_logs;

```
```bash
CREATE TABLE successful_emails (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Rname VARCHAR(255),
    Cname VARCHAR(255),
    EAddr VARCHAR(255),
    pos VARCHAR(255),
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```
## 📦 Run the Script

```bash
node mayur.js
```

<h2>🙋‍♂️ Author</h2>
<p>
  <strong>Mayur Bhusare</strong><br>
  📧 <a href="mailto:mayurbhusare8262@gmail.com">mayurbhusare8262@gmail.com</a><br>
  🔗 
  <a href="https://www.linkedin.com/in/mayur-bhusare/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
  <a href="https://bhusaremayur.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Portfolio</a>
</p>

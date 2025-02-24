const fs = require('fs');
const nodemailer = require('nodemailer');
const csv = require('csv-parser');

// Email configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "mbhusare_cs@jspmrscoe.edu.in",
    pass: "piai iocw qbqs htby",
  },
});

const sendEmail = (row) => {
  const { Rname, Cname, EAddr, pos } = row; // Extract CSV data
  const mailOptions = {
    from: 'Mayur Bhusare <mbhusare_cs@jspmrscoe.edu.in>',
    to: EAddr,
    subject: `Request for an Interview Opportunity - ${pos} at ${Cname}`,
    html: `
<p>Dear ${Rname},</p>
<p>My name is Mayur Shankar Bhusare, and I am currently a student with hands-on experience in various projects, which are detailed in my resume. I noticed that your company, <b>${Cname}</b>, is seeking a <b>${pos}</b>, and I am eager to express my interest in this role.</p>
<p>Here's a quick overview of my profile:
<ul>
<li>Proficient in developing projects independently, demonstrating my understanding of key concepts.</li>
<li>Focused on improving my practical knowledge through self-initiated projects.</li>
</ul>
</p>
<p>For more details, please check:
<ul>
<li><b><a href="https://drive.google.com/file/d/1hRqgQR8pNr8rrTRRmbGYVxoc7xCZJV0K/view?usp=drive_link">My Resume</a></b></li>
<li><b><a href="https://www.linkedin.com/in/mayur-bhusare/">LinkedIn Profile</a></b></li>
<li><b><a href="https://bhusaremayur.github.io/portfolio/">My Portfolio</a></b></li>
</ul>
</p>
<p>Thank you for considering my application. I am looking forward to the possibility of discussing how my skills and passion align with the requirements of the ${pos} role at ${Cname}.</p>
<p>Best regards,<br>
<b>Mayur Shankar Bhusare</b><br>
<b>Contact No:</b> 8262802168</p>`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`Error sending email to ${row.EAddr}: ${error}`);
    } else {
      console.log(`Email sent to ${row.EAddr}: ${info.response}`);
    }
  });
};

// Read CSV file and send emails
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(`Sending email to ${row.EAddr}...`);
    sendEmail(row);
  })
  .on('end', () => {
    console.log('All emails processed.');
  });
// to exicute command : node mayur.js
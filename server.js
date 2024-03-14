const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle form submissions
app.post('/submit-form', async (req, res) => {
  const formData = req.body;

  // Replace with your email and other configurations
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'reliable-lock@outlook.com',
      pass: 'Reliable2024',
    },
  });

  const mailOptions = {
    from: formData.emailAddress, // Set the "from" address dynamically
    to: 'reliable-lock@outlook.com',
    subject: 'New Form Submission',
    html: `
      <p>First Name: ${formData.firstName}</p>
      <p>Last Name: ${formData.lastName}</p>
      <p>Email Address: ${formData.emailAddress}</p>
      <p>CellPhone Numbers: ${formData.cellphoneNumbers}</p>
      <p>Message: ${formData.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

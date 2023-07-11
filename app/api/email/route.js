import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Create a transporter object
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'your-email@gmail.com',
          pass: 'your-email-password'
        }
      });

      // Set up the email message
      const mailOptions = {
        from: email,
        to: 'recipient-email@example.com',
        subject: 'New Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}

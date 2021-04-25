const nodeMailer = require('nodemailer');

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { name, phone, email, message } = req.body;

		let transporter = nodeMailer.createTransport({
			host: 'smtp.office365.com',
			secure: false,
			port: 587,
			tls: {
				rejectUnauthorized: false,
			},
			auth: {
				user: process.env.email_username,
				pass: process.env.email_pw,
			},
		});

		const output = `
		<p>You have a new consultation request!</p>
		<h3>Contact Details<h3>
		<ul>
			<li>Name: ${name}</li>
			<li>Phone: ${phone}</li>
			<li>Email: ${email}</li>
		</ul>
		<h3>Message Details</h3>
		<p>${message}</p>
		`;

		try {
			const result = await transporter.sendMail(
				{
					from: '"DMLaw Contact NodeMailer" <a1b2c3d419851@outlook.com>',
					to: process.env.email_list,
					subject: 'Test email from Outlook (w/ NodeMailer)',
					html: output,
				},
				(err, info) => {
					if (err) {
						// console.log(err);
						console.log(err.code, err.responseCode, err.command);
						res.status(err.responseCode).send({
							response: 'Something went wrong, please try again later.',
						});
					} else {
						res
							.status(201)
							.send({ response: 'Message has been sent successfully!' });
					}
				}
			);
		} catch (err) {}
	}
}

export const config = {
	api: {
		externalResolver: true,
	},
};

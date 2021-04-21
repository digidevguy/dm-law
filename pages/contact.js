import {
	Box,
	Button,
	Divider,
	Grid,
	makeStyles,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';
import Image from 'next/image';
import { useState } from 'react';

import Footer from '../components/layouts/footer';

const useStyles = makeStyles((theme) => ({
	btn: { margin: theme.spacing(2), background: '#1651A1' },
	container: {
		position: 'relative',
	},
	root: {
		flexGrow: 1,
		'& .MuiPaper-root': {
			margin: 'auto',
			marginTop: '15px',
			marginBottom: '15px',
		},
	},
	formContent: {
		margin: theme.spacing(3),
		padding: theme.spacing(2),
		backgroundColor: '#edeef7',
		textAlign: 'center',
		maxWidth: '750px',
		width: '90%',
	},
	form: {
		'& .MuiTextField-root': {
			margin: theme.spacing(2),
			width: '80%',
		},
	},
	pageImg: {
		[theme.breakpoints.down('sm')]: { marginTop: theme.spacing(1) },
	},
	paperContent: {
		margin: theme.spacing(3),
		padding: theme.spacing(1),
		backgroundColor: '',
		textAlign: 'center',
		maxWidth: '750px',
		width: '90%',
	},
	title: {
		position: 'absolute',
		color: '#FFFFFF',
		top: '50%',
		left: '15%',
	},
}));

export default function ContactPage() {
	const classes = useStyles();
	const [formValues, setFormValues] = useState({
		name: '',
		phone: '',
		email: '',
		message: '',
		bttc: '',
	});
	const [error, setError] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		// console.log(formValues);

		fetch('/api/message', {
			method: 'POST',
			body: JSON.stringify(formValues),
			headers: { 'Content-Type': 'application/json' },
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

	return (
		<div className={classes.root}>
			<Box className={classes.container}>
				<Image
					layout='responsive'
					src='/images/pawel-czerwinski--0xCCPIbl3M-unsplash.jpg'
					alt='Contact Us Image'
					width={475}
					height={175}
				/>
				<Typography className={classes.title} variant='h1'>
					Contact Us
				</Typography>
			</Box>
			<Grid container>
				<Grid item sm={6}>
					<Paper className={classes.formContent}>
						<Typography variant='h5'>
							Schedule your Free 15 Minute Consultation.
						</Typography>
						<form className={classes.form} autoComplete='off'>
							<div>
								<TextField
									name='name'
									label='Your Name'
									onChange={handleInputChange}
									value={formValues.name}
								/>
								<TextField
									name='phone'
									label='Telephone Number'
									onChange={handleInputChange}
									value={formValues.phone}
								/>

								<TextField
									name='email'
									label='Email Address'
									onChange={handleInputChange}
									value={formValues.email}
								/>
								<TextField
									name='bttc'
									label='Best Time to Contact'
									onChange={handleInputChange}
									value={formValues.bttc}
								/>

								<TextField
									name='message'
									label='How can we help you?'
									helperText='Please keep your message to under 150 words.'
									variant='outlined'
									multiline
									rows={4}
									onChange={handleInputChange}
									value={formValues.message}
								/>
							</div>
							<Button
								className={classes.btn}
								variant='contained'
								onClick={submitHandler}
								color='primary'
							>
								Submit
							</Button>
						</form>
					</Paper>
				</Grid>
				<Grid item sm={6}>
					<Paper className={classes.paperContent}>
						<Typography>
							We are a full-service law firm and can assist with legal issues
							including wills, trusts, probate, family matters, business
							formation, trademarks and guardianship matters. Contact us today
							to find out how we can be of assistance.
						</Typography>
						<Box className={classes.pageImg}>
							<Image
								src='/images/contact/phone-photo.png'
								alt='help image'
								width={200}
								height={300}
								layout='intrinsic'
							/>
						</Box>
					</Paper>
				</Grid>
			</Grid>

			{/* <section></section> */}
			<Footer />
		</div>
	);
}

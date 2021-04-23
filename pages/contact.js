import {
	Box,
	Button,
	Grid,
	makeStyles,
	Paper,
	Snackbar,
	TextField,
	Typography,
} from '@material-ui/core';
import Image from 'next/image';
import { useState } from 'react';

import Toast from '../src/Toast';
import Footer from '../components/layouts/footer';

const useStyles = makeStyles((theme) => ({
	btn: { margin: theme.spacing(2), background: '#1651A1' },
	container: {
		position: 'relative',
		maxHeight: '300px',
		overflow: 'hidden',
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
		padding: theme.spacing(2),
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
	const [open, setOpen] = useState(false);
	const [error, setError] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleToast = () => {
		setOpen(!open);
	};

	const handleToastClose = (e, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		// try {
		// 	const response = await fetch('/api/message', {
		// 		method: 'POST',
		// 		body: JSON.stringify(formValues),
		// 		headers: { 'Content-Type': 'application/json' },
		// 	});
		// 	const responseData = await response.json();
		// 	if (response.ok) {
		// 		handleSnack();
		// 		console.log(responseData);
		// 	}
		// } catch (err) {}
		handleToast();
	};

	return (
		<div className={classes.root}>
			<Toast
				open={open}
				onClose={handleToastClose}
				message='Message sent successfully!'
			/>
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
			<Grid container alignItems='center'>
				<Grid item sm={6}>
					<Paper className={classes.formContent}>
						<Typography variant='h5'>
							Schedule Your Free 15 Minute Consultation
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
					<Box className={classes.paperContent}>
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
								width={300}
								height={400}
								layout='intrinsic'
							/>
						</Box>
					</Box>
				</Grid>
			</Grid>

			<Footer />
		</div>
	);
}

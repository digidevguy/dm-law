import { useRouter } from 'next/router';
import Image from 'next/image';
import {
	Backdrop,
	Box,
	Button,
	CircularProgress,
	Container,
	Divider,
	Grid,
	makeStyles,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';

import { useState } from 'react';

// Custom components
import Toast from '../src/Toast';
import Footer from '../components/layouts/footer';
import Head from 'next/head';
  
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
	spinner: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
	officeInfo: {
		'& .MuiDivider-middle': { backgroundColor: '#FFF', opacity: 0.25 },
		padding: theme.spacing(1),
		marginTop: theme.spacing(1),
		backgroundColor: '#1651A1',
		color: '#FFF',
		borderWidth: '5px',
		borderStyle: 'double',
		borderColor: 'rgba(255,255,255,0.25)',
	},
	 a {
		color: #ffffff,
		text-decoration: none,
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
	const [resMessage, setResMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const router = useRouter();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleToast = (string) => {
		setResMessage(string);
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
		setError(false);
		setLoading(true);

		// Basic email validation
		if (!formValues.email || !formValues.email.includes('@')) {
			setLoading(false);
			setError(true);
			return;
		}

		try {
			const response = await fetch('/api/message', {
				method: 'POST',
				body: JSON.stringify(formValues),
				headers: { 'Content-Type': 'application/json' },
			});
			const responseData = await response.json();
			if (response.ok) {
				setLoading(false);
				console.log(responseData);
				handleToast('Your message has been sent!');
				setTimeout(() => router.push('/'), 3000);
			} else {
				setLoading(false);
				handleToast('There was an error. Please try again.');
			}
		} catch (err) {
			handleToast('There was an error. Please try again.');
		}
	};

	return (
		<>
			<Head>
				<title>Contact Us</title>
				<meta
					name='description'
					content='Contact Dyer & Mauro to assist you in the Mesquite and Dallas area.'
				/>
			</Head>
			<div className={classes.root}>
				<Backdrop className={classes.spinner} open={loading}>
					<CircularProgress color='inherit' />
				</Backdrop>
				<Toast open={open} onClose={handleToastClose} message={resMessage} />
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
								Schedule Your Free 30 Minute Consultation
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
										error={error}
										helperText={
											error
												? 'Email is either missing or invalid. Please try again'
												: ''
										}
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

							<Grid container className={classes.officeInfo} justify='center'>
								<Grid item sm={6}>
									<Typography>Office Number </Typography>
									<Divider variant='middle' />
									<a href= "tel:9726561446"> (972) 656-1446 </a>
								</Grid>
								<Grid item sm={6}>
									<Typography>Office Hours</Typography>
									<Divider variant='middle' />
									<Typography>Monday - Friday 9:00AM - 5:00PM</Typography>
								</Grid>
							</Grid>
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
		</>
	);
}

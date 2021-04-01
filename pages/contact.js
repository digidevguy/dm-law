import {
	Box,
	Button,
	makeStyles,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';
import Image from 'next/image';

import Footer from '../components/layouts/footer';

const useStyles = makeStyles((theme) => ({
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
	pageContent: {
		margin: theme.spacing(3),
		padding: theme.spacing(1),
		backgroundColor: '#ffffff',
		textAlign: 'center',
		maxWidth: '900px',
		width: '90%',
	},
	form: {
		'& .MuiTextField-root': {
			margin: theme.spacing(2),
			width: '80%',
		},
	},
	title: {
		position: 'absolute',
		top: '50%',
		left: '15%',
		color: '#ffffff',
	},
}));

export default function ContactPage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Box className={classes.container}>
				<Image
					layout='responsive'
					src='/images/pawel-czerwinski--0xCCPIbl3M-unsplash.jpg'
					alt='Placeholder contact us image'
					width={475}
					height={175}
				/>
				<Typography className={classes.title} variant='h1'>
					Contact Page
				</Typography>
			</Box>
			<Paper className={classes.pageContent}>
				<Typography> Reach out for a free consultation, and tacos!</Typography>
				<form className={classes.form} autoComplete='off'>
					<div>
						<TextField name='name' label='Your Name' />
						<TextField name='phone' label='Telephone Number' />

						<TextField name='email' label='Email Address' />

						<TextField
							name='message'
							label='How can we help you?'
							variant='outlined'
							multiline
							rows={4}
						/>
					</div>
					<Button variant='contained'>Submit</Button>
				</form>
			</Paper>
			{/* <section></section> */}
			<Footer />
		</div>
	);
}

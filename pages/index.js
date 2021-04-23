import Image from 'next/image';
import {
	Box,
	CardContent,
	Container,
	Divider,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';

import Card from '../components/home/Card';
import Footer from '../components/layouts/footer';
import Link from '../src/Link';
import CallToAction from '../components/shared/call-to-action';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		'& #features': {
			backgroundColor: '#f3f4ed',
			textAlign: 'center',
			padding: theme.spacing(1),
		},
		'& #call-to-action': {
			textAlign: 'center',
			justify: 'center',
		},
	},
	container: {
		position: 'relative',
		overflow: 'hidden',
		maxHeight: '300px',
		padding: theme.spacing(2),
		borderWidth: '5px',
		borderStyle: 'double',
	},
	titleArea: {
		position: 'absolute',
		bottom: '0%',
		left: 0,
		width: '100%',
		padding: theme.spacing(4),
		background: 'inherit',
	},
	subtitle: {
		fontWeight: '300',
		fontStyle: 'italic',
		textAlign: 'center',
		fontFamily: 'serif',
		fontSize: '2rem',
		[theme.breakpoints.down('sm')]: { fontSize: '1.3rem' },
		[theme.breakpoints.down('xs')]: { fontSize: '1rem' },
	},
	title: {
		fontWeight: '900',
		textAlign: 'center',
		fontFamily: 'serif',
	},
	bannerImg: {
		textAlign: 'center',
	},
}));

export default function Home() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Box>
				<Grid container alignItems='center' className={classes.container}>
					{/* <Box>
					<Image
						layout='responsive'
						src='/images/home/tingey-injury-law-firm-veNb0DDegzE-unsplash.jpg'
						alt='Lawfirm Partners picture'
						width={1920}
						height={600}
					/>
				</Box> */}
					<Grid item xs={6} className={classes.bannerImg}>
						<Image
							src='/images/dm-logo.png'
							alt='Dyer and Mauro Logo'
							height='209.8125'
							width='391.3125'
							layout='intrinsic'
						/>
					</Grid>
					<Grid item xs={6}>
						<Typography variant='h1' className={classes.title}>
							Dyer & Mauro
						</Typography>
						<Typography className={classes.subtitle}>
							Helping Protect Your Tomorrow
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box component='section' id='features'>
				<Typography variant='h3'>Features</Typography>
				<Grid container justify='center'>
					<Grid item>
						<Card
							title='Virtual Office'
							description='Our lawyers work remotely for your connivence so you can get
            the legal help you need without having to leave your home.'
						/>
					</Grid>
					<Grid item>
						<Card
							title='Client Convenience'
							description='We offer flexible office locations so when we do meet in person the location will be convenient to you. '
						/>
					</Grid>
					<Grid item>
						<Card
							title='Financing Options'
							description='Ask about our flexible payment options.'
						/>
					</Grid>
				</Grid>
			</Box>
			<CallToAction />
			<Footer />
		</div>
	);
}

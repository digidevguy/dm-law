import Image from 'next/image';
import {
	Box,
	Button,
	Divider,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';

// Custom components
import Card from '../components/home/Card';
import Footer from '../components/layouts/footer';
import Link from '../src/Link';
import CallToAction from '../components/shared/call-to-action';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		'& #features': {
			backgroundColor: '#edeef7',
			textAlign: 'center',
			padding: theme.spacing(1),
		},
		'& #call-to-action': {
			textAlign: 'center',
			justify: 'center',
		},
		'& #location-info': {
			textAlign: 'center',
		},
		'& #areas-of-practice': {
			'& span': { color: '#FFF' },
			'& .MuiDivider-middle': { backgroundColor: '#FFF', opacity: 0.25 },
			padding: theme.spacing(1),
			textAlign: 'center',
			backgroundColor: '#1651A1',
			color: '#FFF',
			borderWidth: '5px',
			borderStyle: 'double',
			borderColor: 'rgba(255,255,255,0.25)',
		},
	},
	container: {
		position: 'relative',
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
		fontWeight: '400',
		fontStyle: 'italic',
		textAlign: 'center',
		fontFamily: 'Libre Baskerville',
		fontSize: '2rem',
		[theme.breakpoints.down('sm')]: { fontSize: '1.3rem' },
		[theme.breakpoints.down('xs')]: { fontSize: '1rem' },
	},
	title: {
		fontWeight: '700',
		textAlign: 'center',
		fontFamily: 'Libre Baskerville',
	},
	bannerLogo: {
		textAlign: 'center',
	},
	largeDivider: {
		backgroundColor: '#e4fbff',
		maxWidth: '60%',
		height: '2px',
		margin: 'auto',
		marginBottom: '5px',
		opacity: 0.5,
	},
	smallerDivider: {
		backgroundColor: '#e4fbff',
		maxWidth: '50%',
		margin: 'auto',
		marginBottom: '10px',
		opacity: 0.35,
	},
}));

export default function Home() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Head>
				<title>Dyer & Mauro Law</title>
				<meta
					name='description'
					content='Estate Planning and Family lawyers serving the Mesquite and Dallas areas.'
				/>
			</Head>
			<Box>
				<Grid container alignItems='center' className={classes.container}>
					<Grid item xs={6}>
						<Typography variant='h1' className={classes.title}>
							Dyer & Mauro
						</Typography>
						<Typography className={classes.subtitle}>
							Helping Protect Your Tomorrow
						</Typography>
					</Grid>
					<Grid item xs={6} className={classes.bannerLogo}>
						<Image
							src='/images/dm-logo.png'
							alt='Dyer and Mauro Logo'
							height='209.8125'
							width='391.3125'
							layout='intrinsic'
						/>
					</Grid>
				</Grid>
			</Box>
			<Box component='section' id='features'>
				<Typography variant='h3'>Features</Typography>
				<Grid container justify='center'>
					<Grid item>
						<Card
							title='Virtual Office'
							description='Our lawyers work remotely for your convenience so you can get
            the legal help you need without having to leave your home.'
						/>
					</Grid>
					<Grid item>
						<Card
							title='Client Convenience'
							description='We offer flexible office locations so when we do meet in person, the location will be convenient to you. '
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
			<Box component='section' id='areas-of-practice'>
				<Typography variant='h3'>Areas of Practice</Typography>
				<Divider className={classes.largeDivider} />

				<Divider className={classes.smallerDivider} />
				<Typography>
					Here at Dyer & Mauro, we offer several areas of practice to our
					clients. These options incude:
				</Typography>
				<Grid container alignItems='center' justify='center'>
					<Grid item sm={6}>
						<Button
							size='large'
							variant='text'
							component={Link}
							href='/practice-area/wills-and-trusts'
							noLinkStyle
						>
							Wills & Trusts
						</Button>
						<Divider variant='middle' />
						<Button
							size='large'
							variant='text'
							component={Link}
							href='/practice-area/probate'
							noLinkStyle
						>
							Probate
						</Button>
						<Divider variant='middle' />
						<Button
							size='large'
							variant='text'
							component={Link}
							href='/practice-area/family'
							noLinkStyle
						>
							Family Law
						</Button>
						<Divider variant='middle' />
						<Button
							size='large'
							variant='text'
							component={Link}
							href='/practice-area/trademark'
							noLinkStyle
						>
							Trademark
						</Button>
					</Grid>
					<Grid item sm={6}>
						<Button
							size='large'
							variant='text'
							component={Link}
							href='/practice-area/trade-secrets'
							noLinkStyle
						>
							Trade Secrets
						</Button>
						<Divider variant='middle' />
						<Button
							size='large'
							variant='text'
							component={Link}
							href='/practice-area/formation'
							noLinkStyle
						>
							Formation
						</Button>
						<Divider variant='middle' />
						<Button
							size='large'
							variant='text'
							component={Link}
							href='/practice-area/noncompete-nda'
							noLinkStyle
						>
							Non-Compete - NDA
						</Button>
					</Grid>
				</Grid>
			</Box>
			<Divider variant='middle' />
			<CallToAction />
			<Footer />
		</div>
	);
}

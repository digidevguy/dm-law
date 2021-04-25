import Image from 'next/image';
import {
	Box,
	Button,
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
			backgroundColor: '#edeef7',
			// backgroundColor: '#1651A1',
			textAlign: 'center',
			padding: theme.spacing(1),
		},
		'& #call-to-action': {
			textAlign: 'center',
			justify: 'center',
		},
		'& #location-info': {
			textAlign: 'center',
			// width: '30%',
		},
		'& #areas-of-practice': {
			textAlign: 'center',
			margin: theme.spacing(1),
			padding: theme.spacing(1),
			'& .MuiGrid-container': { margin: theme.spacing(1) },
			'& .MuiGrid-item': {
				[theme.breakpoints.down('xs')]: { margin: theme.spacing(1) },
				// margin: theme.spacing(1),
			},
			'& ul': { listStyle: 'none' },
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
}));

export default function Home() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Box>
				{/* <Box className={classes.bannerImg}>
					<Image
						layout='responsive'
						src='/images/home/tingey-injury-law-firm-veNb0DDegzE-unsplash.jpg'
						alt='Lawfirm Partners picture'
						width={2590}
						height={1032}
					/>
				</Box> */}
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
			<Box component='section' id='areas-of-practice'>
				<Typography variant='h3'>Areas of Practice</Typography>
				<Grid container alignItems='center' justify='center'>
					<Grid item sm={6}>
						<Image
							src='/images/home/florian-klauer-mk7D-4UCfmg-unsplash.jpg'
							alt='Typewriter picture'
							height={209.32}
							width={159.64}
						/>
					</Grid>
					<Grid item sm={6}>
						<Typography>
							Here at Dyer & Mauro, we offer several areas of practice to our
							clients. These options incude:
						</Typography>
						<ul>
							<li>
								<Button
									variant='text'
									component={Link}
									href='/practice-area/wills-and-trusts'
								>
									Wills & Trust
								</Button>
							</li>
							<li>
								<Button
									variant='text'
									component={Link}
									href='/practice-area/probate'
								>
									Probate
								</Button>
							</li>
							<li>
								<Button
									variant='text'
									component={Link}
									href='/practice-area/family'
								>
									Family Law
								</Button>
							</li>
							<li>
								<Button
									variant='text'
									component={Link}
									href='/practice-area/trademark'
								>
									Trademark
								</Button>
							</li>
							<li>
								<Button
									variant='text'
									component={Link}
									href='/practice-area/trade-secrets'
								>
									Trade Secrets
								</Button>
							</li>
							<li>
								<Button
									variant='text'
									component={Link}
									href='/practice-area/formation'
								>
									Formation
								</Button>
							</li>
							<li>
								<Button
									variant='text'
									component={Link}
									href='/practice-area/noncompete-nda'
								>
									Non-Compete - NDA
								</Button>
							</li>
						</ul>
					</Grid>
				</Grid>
				<Divider variant='middle' />
			</Box>
			<CallToAction />
			<Footer />
		</div>
	);
}

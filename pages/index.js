import Image from 'next/image';
import {
	Box,
	CardContent,
	Divider,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';

import Card from '../components/home/Card';
import Footer from '../components/layouts/footer';
import Link from '../src/Link';
import CallToAction from '../components/shared/call-to-action';
import { InsertChartOutlinedTwoTone, ScatterPlot } from '@material-ui/icons';

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
	},
	title: {
		fontWeight: '900',
	},
}));

const placeholderCardText =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed adipiscing diam.';

export default function Home() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Box className={classes.container}>
				<Box>
					<Image
						layout='responsive'
						src='/images/home/tingey-injury-law-firm-veNb0DDegzE-unsplash.jpg'
						alt='Lawfirm Partners picture'
						width={1920}
						height={600}
					/>
				</Box>
				<Box className={classes.titleArea}>
					<Typography variant='h1' className={classes.title}>
						Dyer & Mauro
					</Typography>
					<Typography variant='subtitle1' className={classes.subtitle}>
						Helping Protect Your Tomorrow
					</Typography>
				</Box>
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

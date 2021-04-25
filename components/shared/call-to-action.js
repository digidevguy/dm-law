import {
	Box,
	Button,
	Container,
	Divider,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';
import Image from 'next/image';

import Link from '../../src/Link';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiDivider-middle': { margin: theme.spacing(1) },
		textAlign: 'center',
		padding: theme.spacing(3),
		backgroundColor: '#FFFFFF',
		'& p': {
			[theme.breakpoints.down('sm')]: { fontSize: '0.875rem' },
		},
	},
	btn: { margin: theme.spacing(2), background: '#1651A1' },
	rightBox: {
		[theme.breakpoints.down('sm')]: { marginTop: theme.spacing(1) },
	},
	imgWrapper: {
		margin: theme.spacing(1),
	},
}));

const CallToAction = () => {
	const classes = useStyles();

	return (
		<Box className={classes.root} component='section' id='call-to-action'>
			<Grid container alignItems='center'>
				<Grid item xs={12} sm={6}>
					<Container>
						<Typography variant='h2'>Need Help?</Typography>
						<Divider variant='middle' />
						<Typography>
							We are a full-service law firm and can assist with legal issues
							including wills, trusts, probate, family matters, business
							formation, trademarks and guardianship matters. Contact us today
							to find out how we can be of assistance.
						</Typography>
					</Container>{' '}
				</Grid>
				<Grid className={classes.rightBox} item xs={12} sm={6}>
					<Container>
						<div className={classes.imgWrapper}>
							<Image
								src='/images/toa-heftiba-_UIVmIBB3JU-unsplash.jpg'
								alt='help image'
								width={325}
								height={200}
								layout='intrinsic'
							/>
						</div>
					</Container>
					<Button
						className={classes.btn}
						variant='contained'
						color='primary'
						component={Link}
						noLinkStyle
						href='/contact'
					>
						Contact Us
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default CallToAction;

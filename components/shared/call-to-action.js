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
		textAlign: 'center',
		padding: theme.spacing(3),
		backgroundColor: '#FFFFFF',
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
					<Typography variant='h2'>Need Help?</Typography>
					<Divider variant='middle' />
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. In metus
						vulputate eu scelerisque felis imperdiet proin fermentum leo. Ac
						turpis egestas integer eget.
					</Typography>
				</Grid>
				<Grid className={classes.rightBox} item xs={12} sm={6}>
					<Container>
						<div className={classes.imgWrapper}>
							<Image
								src='/images/toa-heftiba-_UIVmIBB3JU-unsplash.jpg'
								alt='help image'
								width={200}
								height={300}
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

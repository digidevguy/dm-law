import { Box, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import Image from 'next/image';

import Footer from '../components/layouts/footer';
import CallToAction from '../components/shared/call-to-action';

const useStyles = makeStyles((theme) => ({
	root: {
		'& h3': {
			fontWeight: '700',
		},
		textAlign: 'center',
		backgroundColor: '#edeef7',
	},
	container: {
		position: 'relative',
		maxHeight: '300px',
		overflow: 'hidden',
	},
	title: {
		position: 'absolute',
		top: '50%',
		left: '15%',
		color: '#ffffff',
	},
	lawyerDescription: {
		textAlign: 'left',
	},
	descriptionText: {
		margin: theme.spacing(3),
	},
	lawyerImg: {
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(2),
			width: '175px',
		},
	},
	altLawyerDiv: {
		[theme.breakpoints.down('xs')]: { flexDirection: 'column-reverse' },
	},
	lawyerSection: { padding: theme.spacing(3) },
}));

export default function AboutPage() {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Box className={classes.container}>
				<Image
					layout='responsive'
					src='/images/mikhail-pavstyuk-EKy2OTRPXdw-unsplash.jpg'
					alt='placeholder image'
					width={475}
					height={175}
				/>
				<Typography className={classes.title} variant='h1'>
					About Us
				</Typography>
			</Box>
			<Box
				component='section'
				id='lawyer-one'
				className={classes.lawyerSection}
			>
				<Grid container alignItems='center' justify='center' spacing='2'>
					<Grid className={classes.lawyerImg} item sm={6}>
						<Image
							src='/images/about/cd-profile.jpeg'
							alt='Conner Dyer Profile Photo'
							width={262.5}
							height={337.5}
						/>
					</Grid>
					<Grid item sm={6}>
						<Typography variant='h3'>Conner Dyer</Typography>
						<Box className={classes.descriptionText}>
							<Typography className={classes.lawyerDescription} variant='body1'>
								Conner is originally from Mesquite Texas. He attended Texas Tech
								where he earned his Bachelors in Sociology in three years as
								well as participated in Tech’s football program. Conner went on
								to attend Baylor Law School where he worked with the
								Intellectual Property Clinic by researching and filing
								trademarks for clients, achieved over 50 hours of legal
								community service, and held position on Baylor’s Law Review.
								Conner has moved back home to Dallas-Fort Worth to give back to
								his home community.
							</Typography>
							<br />
							{/* <Typography className={classes.lawyerDescription} variant='body1'>
								Scelerisque eleifend donec pretium vulputate sapien nec sagittis
								aliquam. Nec dui nunc mattis enim ut tellus elementum. Hac
								habitasse platea dictumst quisque sagittis. Nunc scelerisque
								viverra mauris in aliquam sem fringilla ut. Leo a diam
								sollicitudin tempor. Eros donec ac odio tempor orci dapibus.
								Nibh praesent tristique magna sit amet. Urna neque viverra justo
								nec ultrices dui sapien eget mi. Non consectetur a erat nam at
								lectus urna. Id aliquet lectus proin nibh nisl condimentum.
								Tincidunt arcu non sodales neque sodales ut etiam sit amet. Sed
								vulputate mi sit amet mauris commodo quis. Fermentum posuere
								urna nec tincidunt praesent semper feugiat nibh. Nec dui nunc
								mattis enim ut tellus. Malesuada bibendum arcu vitae elementum
								curabitur vitae nunc.
							</Typography> */}
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Divider variant='middle' />
			<Box
				component='section'
				id='lawyer-two'
				className={classes.lawyerSection}
			>
				<Grid
					className={classes.altLawyerDiv}
					container
					alignItems='center'
					justify='center'
					spacing='2'
				>
					<Grid item sm={6}>
						<Typography variant='h3'>Eric Mauro</Typography>
						<Box className={classes.descriptionText}>
							<Typography className={classes.lawyerDescription} variant='body1'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Lectus vestibulum mattis ullamcorper velit sed ullamcorper
								morbi. Dolor sit amet consectetur adipiscing elit pellentesque
								habitant. Elit ut aliquam purus sit amet luctus venenatis. In
								hendrerit gravida rutrum quisque non tellus orci. Sed augue
								lacus viverra vitae congue eu consequat ac felis. Neque sodales
								ut etiam sit. Ornare suspendisse sed nisi lacus sed viverra
								tellus. Ut eu sem integer vitae justo eget. Lacinia at quis
								risus sed vulputate. Id volutpat lacus laoreet non curabitur
								gravida arcu ac tortor. Parturient montes nascetur ridiculus mus
								mauris. Sit amet consectetur adipiscing elit pellentesque.
								Senectus et netus et malesuada fames. Ante in nibh mauris cursus
								mattis molestie. Tortor dignissim convallis aenean et tortor at
								risus viverra. Nunc congue nisi vitae suscipit tellus mauris.
								Erat nam at lectus urna duis convallis convallis tellus id. Enim
								lobortis scelerisque fermentum dui faucibus in ornare quam
								viverra.
							</Typography>
							<br />
							<Typography className={classes.lawyerDescription} variant='body1'>
								Scelerisque eleifend donec pretium vulputate sapien nec sagittis
								aliquam. Nec dui nunc mattis enim ut tellus elementum. Hac
								habitasse platea dictumst quisque sagittis. Nunc scelerisque
								viverra mauris in aliquam sem fringilla ut. Leo a diam
								sollicitudin tempor. Eros donec ac odio tempor orci dapibus.
								Nibh praesent tristique magna sit amet. Urna neque viverra justo
								nec ultrices dui sapien eget mi. Non consectetur a erat nam at
								lectus urna. Id aliquet lectus proin nibh nisl condimentum.
								Tincidunt arcu non sodales neque sodales ut etiam sit amet. Sed
								vulputate mi sit amet mauris commodo quis. Fermentum posuere
								urna nec tincidunt praesent semper feugiat nibh. Nec dui nunc
								mattis enim ut tellus. Malesuada bibendum arcu vitae elementum
								curabitur vitae nunc.
							</Typography>
						</Box>
					</Grid>
					<Grid className={classes.lawyerImg} item sm={6}>
						<Image
							src='/images/about/em-profile.jpeg'
							alt='Eric Mauro Profile Photo'
							width={262.5}
							height={337.5}
							layout='intrinsic'
						/>
					</Grid>
				</Grid>
			</Box>
			<CallToAction />
			<Footer />
		</Box>
	);
}

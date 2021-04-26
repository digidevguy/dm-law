import { Box, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import Head from 'next/head';
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
		<>
			<Head>
				<title>About Us</title>
				<meta
					name='description'
					content='The Dyer & Mauro Team are ready to assist your legal needs.'
				/>
			</Head>
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
					<Grid container alignItems='center' justify='center'>
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
							<Typography variant='subtitle2'>
								Managing Partner / Founder
							</Typography>
							<Box className={classes.descriptionText}>
								<Typography
									className={classes.lawyerDescription}
									variant='body2'
								>
									Being born and raised in the Dallas area, Conner has a deep
									love for the city that he’s from. After growing up in
									Mesquite, Conner went to Texas Tech University to play
									football, as well as earn his Bachelors degree in Sociology.
									After graduating from Texas Tech University in three years,
									Conner started at Baylor Law School, where he quickly
									excelled, as he found himself making Law Review in his first
									year of law school.
								</Typography>
								<br />
								<Typography
									className={classes.lawyerDescription}
									variant='body2'
								>
									During his time at Baylor Law, Conner spent his free time
									working pro bono in the Waco Community. Additionally, he has
									put a lot of time into working with Baylor’s Intellectual
									Property Clinic, where he helped clients research potential
									marks and file with the USPTO.{' '}
								</Typography>
								<br />
								<Typography
									className={classes.lawyerDescription}
									variant='body2'
								>
									He is now back in the Mesquite area, ready to serve the
									community that helped raise him. In his spare time, Conner
									enjoys hanging outdoors or at the lake with his Toy Australian
									Shepherd, Cotton.{' '}
								</Typography>
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
					>
						<Grid item sm={6}>
							<Typography variant='h3'>Eric Mauro</Typography>
							<Typography variant='subtitle2'>
								Managing Partner / Founder
							</Typography>
							<Box className={classes.descriptionText}>
								<Typography
									className={classes.lawyerDescription}
									variant='body2'
								>
									After high school, Eric joined the Army as a Cavalry Scout
									back in 2004. The Army initially brought him to Texas, but it
									was the community that kept him here. Now that he can, Eric is
									ready to give back to that same community that he called home
									for so long.
								</Typography>
								<br />
								<Typography
									className={classes.lawyerDescription}
									variant='body2'
								>
									Eric has been living in the DFW area since 2007. While in the
									DFW Eric went to Texas Woman’s University for his
									undergraduate degree where he earned his Bachelor’s of
									Sciences in Communication Sciences and Disorders. During his
									studies he focused on Deaf Education and learning about the
									Deaf community.
								</Typography>
								<br />
								<Typography
									className={classes.lawyerDescription}
									variant='body2'
								>
									He left the DFW briefly to finish his studies at Baylor Law in
									Waco. Now that he is back, he wants to do what he can to
									provide excellent legal services to the Dallas-Fort Worth
									area. He went to law school because he wanted to be able to
									help people through what can be a complicated and stressful
									process and make their lives just a little bit easier.
								</Typography>
								<br />
								<Typography
									className={classes.lawyerDescription}
									variant='body2'
								>
									While at Baylor, Eric focused mainly on building his Estate
									Planning skills, such as drafting Wills and going through the
									Administration of Estate. Working closely with his professors,
									he earned the Estate Planning distinction from Baylor Law
									school.
								</Typography>
								<br />
								<Typography
									className={classes.lawyerDescription}
									variant='body2'
								>
									During his free time, Eric likes to bake fun and exciting
									deserts as well as taking his two Australian Shepherds,
									Tootsie and Giggles, on hikes at the local parks and nature
									preserves.
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
		</>
	);
}

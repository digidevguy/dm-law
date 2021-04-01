import {
	Box,
	Container,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';
import Image from 'next/image';
import { Fragment } from 'react';

import Footer from '../components/layouts/footer';
import CallToAction from '../components/shared/call-to-action';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		textAlign: 'center',
	},
	container: {
		position: 'relative',
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
	lawyerImg: {
		verticalAlign: 'middle',
	},
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
					About Page
				</Typography>
			</Box>
			<Container component='section' id='lawyer-one'>
				<Grid container align='center' justify='center'>
					<Grid item sm={6}>
						<Image
							src='/images/hunters-race-MYbhN8KaaEc-unsplash.jpg'
							alt='Lawyer 1'
							width={350}
							height={215}
						/>
					</Grid>
					<Grid item sm={6}>
						<Typography variant='h3'>Lawyer One</Typography>
						<Typography className={classes.lawyerDescription} variant='body1'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
							vestibulum mattis ullamcorper velit sed ullamcorper morbi. Dolor
							sit amet consectetur adipiscing elit pellentesque habitant. Elit
							ut aliquam purus sit amet luctus venenatis. In hendrerit gravida
							rutrum quisque non tellus orci. Sed augue lacus viverra vitae
							congue eu consequat ac felis. Neque sodales ut etiam sit. Ornare
							suspendisse sed nisi lacus sed viverra tellus. Ut eu sem integer
							vitae justo eget. Lacinia at quis risus sed vulputate. Id volutpat
							lacus laoreet non curabitur gravida arcu ac tortor. Parturient
							montes nascetur ridiculus mus mauris. Sit amet consectetur
							adipiscing elit pellentesque. Senectus et netus et malesuada
							fames. Ante in nibh mauris cursus mattis molestie. Tortor
							dignissim convallis aenean et tortor at risus viverra. Nunc congue
							nisi vitae suscipit tellus mauris. Erat nam at lectus urna duis
							convallis convallis tellus id. Enim lobortis scelerisque fermentum
							dui faucibus in ornare quam viverra.
						</Typography>
						<Typography className={classes.lawyerDescription} variant='body1'>
							Scelerisque eleifend donec pretium vulputate sapien nec sagittis
							aliquam. Nec dui nunc mattis enim ut tellus elementum. Hac
							habitasse platea dictumst quisque sagittis. Nunc scelerisque
							viverra mauris in aliquam sem fringilla ut. Leo a diam
							sollicitudin tempor. Eros donec ac odio tempor orci dapibus. Nibh
							praesent tristique magna sit amet. Urna neque viverra justo nec
							ultrices dui sapien eget mi. Non consectetur a erat nam at lectus
							urna. Id aliquet lectus proin nibh nisl condimentum. Tincidunt
							arcu non sodales neque sodales ut etiam sit amet. Sed vulputate mi
							sit amet mauris commodo quis. Fermentum posuere urna nec tincidunt
							praesent semper feugiat nibh. Nec dui nunc mattis enim ut tellus.
							Malesuada bibendum arcu vitae elementum curabitur vitae nunc.
						</Typography>
					</Grid>
				</Grid>
			</Container>
			<CallToAction />
			<Footer />
		</Box>
	);
}

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	makeStyles,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import Link from '../../src/Link';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiDialog-paper': {
			backgroundColor: theme.palette.info.dark,
			'& .MuiDialogContentText-root': {
				color: '#FFF',
			},
			position: 'absolute',
			top: 0,
		},
	},
	link: {
		color: 'white',
		textDecoration: 'underline',
	},
}));

export default function ConsentDialog() {
	const [consentOpen, setConsentOpen] = useState(false);
	const classes = useStyles();

	const handleConsentOpen = () => {
		setConsentOpen(true);
	};
	const handleConsentClose = () => {
		setConsentOpen(false);
	};

	useEffect(() => {
		if (sessionStorage.getItem('ShowAlertDialog') != 'false') {
			const delay = setTimeout(() => {
				setConsentOpen(true);
				sessionStorage.setItem('ShowAlertDialog', false);
			}, 1000);
			return () => clearTimeout(delay);
		}
	}, []);

	return (
		<Dialog
			open={consentOpen}
			onClose={handleConsentClose}
			className={classes.root}
			BackdropProps={{ style: { backgroundColor: 'transparent' } }}
		>
			<DialogContent>
				<DialogContentText>
					This website uses cookies to ensure you get the best experience on our
					website.{' '}
					<Link href='https://www.cookiesandyou.com/' className={classes.link}>
						Learn More
					</Link>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					variant='contained'
					color='default'
					onClick={handleConsentClose}
				>
					Got it!
				</Button>
			</DialogActions>
		</Dialog>
	);
}

import { Button, IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'center',
	},
}));

export default function Toast(props) {
	const classes = useStyles();

	return (
		<Snackbar
			className={classes.root}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			open={props.open}
			autoHideDuration={3000}
			onClose={props.onClose}
			action={
				<>
					<IconButton
						size='small'
						aria-label='close'
						color='secondary'
						onClick={props.onClose}
					>
						<CloseIcon fontSize='small' />
					</IconButton>
				</>
			}
			{...props}
		/>
	);
}

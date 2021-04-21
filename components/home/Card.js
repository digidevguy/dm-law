import {
	Card,
	CardContent,
	Divider,
	makeStyles,
	Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 275,
		textAlign: 'center',
		margin: theme.spacing(2),
		minHeight: 165,
	},
	title: { fontSize: 20 },
	description: { fontSize: 14 },
	divider: {
		margin: theme.spacing(1),
	},
}));

const CustomCard = ({ title, description }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant='h4' className={classes.title}>
					{title}
				</Typography>
				<Divider className={classes.divider} variant='middle' />
				<Typography variant='body1' className={classes.description}>
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CustomCard;

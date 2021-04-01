import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 275,
		textAlign: 'center',
		margin: theme.spacing(2),
	},
	title: { fontSize: 14 },
	description: { fontSize: 12 },
}));

const CustomCard = ({ title, description }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography className={classes.title}>{title}</Typography>
				<Typography className={classes.description}>{description}</Typography>
			</CardContent>
		</Card>
	);
};

export default CustomCard;

import { Divider, makeStyles, Paper, Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

const useStyles = makeStyles((theme) => ({
	article: {
		width: '80%',
		padding: theme.spacing(4),
		margin: theme.spacing(2),
	},
}));

export default function PracticeContent({ practiceArea }) {
	const classes = useStyles();

	return (
		<div>
			<article>
				<Typography variant='h1'>{practiceArea.title}</Typography>
				<Divider variant='middle' />
				<ReactMarkdown>{practiceArea.content}</ReactMarkdown>
			</article>
		</div>
	);
}

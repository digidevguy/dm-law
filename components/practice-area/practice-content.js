import { Divider, makeStyles, Paper, Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import unified from 'unified';

const useStyles = makeStyles((theme) => ({
	article: {
		width: '80%',
		padding: theme.spacing(4),
		margin: theme.spacing(2),
	},
}));

export default function PracticeContent({ practiceArea }) {
	const classes = useStyles();

	unified().use(gfm);

	return (
		<>
			<Typography variant='h1'>{practiceArea.title}</Typography>
			<Divider variant='middle' />
			<ReactMarkdown plugins={[gfm]}>{practiceArea.content}</ReactMarkdown>
		</>
	);
}

import { Divider, makeStyles, Paper, Typography } from '@material-ui/core';
import Image from 'next/image';
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
			{/* <Image src={`/images/oractice-areas/${practiceArea.image}`} width={} height={} layout={} /> */}
			<Typography variant='h1'>{practiceArea.name}</Typography>
			<Divider variant='middle' />
			<ReactMarkdown plugins={[gfm]}>{practiceArea.content}</ReactMarkdown>
		</>
	);
}

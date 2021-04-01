import { Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

export default function PracticeContent({ practiceArea }) {
	return (
		<article>
			<Typography variant='h1'>Working hopefully</Typography>
			<ReactMarkdown>{practiceArea.content}</ReactMarkdown>
		</article>
	);
}

import { Box, Divider, makeStyles, Paper, Typography } from '@material-ui/core';
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
	imgBox: {
		width: '100%',
		maxHeight: '450px',
		overflow: 'hidden',
		borderRadius: '10px',
		border: '1px solid',
	},
	title: {
		margin: '10px auto',
	},
}));

export default function PracticeContent({ practiceArea }) {
	const classes = useStyles();

	unified().use(gfm);

	return (
		<>
			<Box className={classes.imgBox}>
				<Image
					src={`/images/practice-areas/${practiceArea.image}`}
					width={practiceArea.imgWidth}
					height={practiceArea.imgHeight}
					layout='responsive'
				/>
			</Box>
			<Typography variant='h1' className={classes.title}>
				{practiceArea.name}
			</Typography>
			<Divider variant='middle' />
			<ReactMarkdown plugins={[gfm]}>{practiceArea.content}</ReactMarkdown>
		</>
	);
}

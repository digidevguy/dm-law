import { Box, Container, makeStyles, Paper } from '@material-ui/core';
import Head from 'next/head';
import { Fragment } from 'react';

import PracticeContent from '../../components/practice-area/practice-content';
import Footer from '../../components/layouts/footer';
import { getPAData, getPracticeAreaFiles } from '../../util/law-util';

const useStyles = makeStyles((theme) => ({
	article: {
		padding: theme.spacing(3),
		backgroundColor: '#536162',
	},
}));

export default function PracticeAreaPage(props) {
	const classes = useStyles();

	return (
		<Fragment>
			<Head>
				<title></title>
				<meta name='description' />
			</Head>
			<Container className={classes.article}>
				<PracticeContent practiceArea={props.practiceAreaData} />
			</Container>
			<Footer />
		</Fragment>
	);
}

export async function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;

	const practiceAreaData = getPAData(slug);

	return {
		props: {
			practiceAreaData: practiceAreaData,
		},
	};
}

export async function getStaticPaths() {
	const practiceAreaNames = getPracticeAreaFiles();

	const slugs = practiceAreaNames.map((filename) =>
		filename.replace(/\.md$/, '')
	);

	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false,
	};
}

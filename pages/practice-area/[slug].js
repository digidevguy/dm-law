import { Box, Container, makeStyles, Paper } from '@material-ui/core';
import Head from 'next/head';
import { Fragment } from 'react';

import PracticeContent from '../../components/practice-area/practice-content';
import Footer from '../../components/layouts/footer';
import { getPAData, getPracticeAreaFiles } from '../../util/law-util';
import CallToAction from '../../components/shared/call-to-action';

const useStyles = makeStyles((theme) => ({
	root: {
		// textAlign: "center",
		backgroundColor: '#FFFFFF',
		padding: theme.spacing(2),
		'& table': {
			margin: 'auto',
			'& tr': {
				'& td': {
					padding: theme.spacing(1),
					width: 325,
				},
			},
		},
	},
	article: {
		margin: 'auto',
		marginBottom: '10px',
		padding: theme.spacing(3),
		backgroundColor: '#edeef7',
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
			<Box className={classes.root}>
				<Paper component='article' className={classes.article}>
					<PracticeContent practiceArea={props.practiceAreaData} />
				</Paper>
			</Box>
			<CallToAction />
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

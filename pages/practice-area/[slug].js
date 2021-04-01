import Head from 'next/head';
import { Fragment } from 'react';

import PracticeContent from '../../components/practice-area/practice-content';
import { getPAData, getPracticeAreaFiles } from '../../util/law-util';

export default function PracticeAreaPage(props) {
	return (
		<Fragment>
			<Head>
				<title></title>
				<meta name='description' />
			</Head>
			<PracticeContent practiceArea={props.practiceAreaData} />
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

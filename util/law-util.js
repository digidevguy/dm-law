import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const practiceAreaDirectory = path.join(process.cwd(), 'law-areas');

export function getPracticeAreaFiles() {
	return fs.readdirSync(practiceAreaDirectory);
}

export function getPAData(paIdentifier) {
	const paSlug = paIdentifier.replace(/\.md$/, '');
	const filePath = path.join(practiceAreaDirectory, `${paSlug}.md`);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);

	const areaData = {
		slug: paSlug,
		...data,
		content,
	};

	return areaData;
}

export function getAllPracticeArea() {
	const practiceAreaFiles = getPracticeAreaFiles();

	const allPracticeAreas = practiceAreaFiles.map((file) => {
		return getPAData(file);
	});

	return allPracticeAreas;
}

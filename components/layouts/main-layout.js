import { Fragment } from 'react';

import Header from './header';

export default function Layout(props) {
	return (
		<Fragment>
			<Header />
			<main>{props.children}</main>
		</Fragment>
	);
}

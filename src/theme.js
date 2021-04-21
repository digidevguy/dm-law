import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#FFFFFF',
		},
		text: {
			primary: '#000000',
		},
	},
});

theme.typography.h1 = {
	fontSize: '1.35rem',
	'@media (min-width: 600px)': {
		fontSize: '2rem',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '3.5rem',
	},
};

theme.typography.h2 = {
	fontSize: '1.25rem',
	'@media (min-width: 600px)': {
		fontSize: '1.75rem',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '3rem',
	},
};

theme.typography.h3 = {
	fontSize: '1.3rem',
	'@media (min-width: 600px)': {
		fontSize: '1.5rem',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '2.75rem',
	},
};

export default theme;

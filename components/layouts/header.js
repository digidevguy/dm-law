import Link from '../../src/Link';
import Image from 'next/image';
import {
	AppBar,
	Button,
	ButtonGroup,
	IconButton,
	makeStyles,
	Toolbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	logo: { padding: theme.spacing(2) },
	menuButton: {
		marginRight: theme.spacing(2),
	},
	nav: {
		'& button': {
			color: '#000000',
		},
		'& a': {
			color: '#000000',
		},
		marginLeft: 'auto',
	},
	text: {
		color: '#00303f',
	},
}));

export default function Header() {
	const classes = useStyles();

	return (
		<header className={classes.root}>
			<AppBar position='static' color='transparent'>
				<Toolbar>
					{/* <IconButton
							className={classes.menuButton}
							edge='start'
							color='inherit'
							aria-label='menu'
						>
							<MenuIcon />
						</IconButton> */}
					<Link className={classes.logo} href='/' passHref>
						<Image
							src='/images/dm-logo.png'
							alt='Company Logo'
							width={85}
							height={45}
						/>
					</Link>
					<nav className={classes.nav}>
						<ButtonGroup variant='text' colot='primary'>
							<Button variant='text' component={Link} noLinkStyle href='/about'>
								About
							</Button>
							<Button>Practice Areas</Button>
							<Button
								variant='text'
								component={Link}
								noLinkStyle
								href='/contact'
							>
								Contact
							</Button>
						</ButtonGroup>
					</nav>
				</Toolbar>
			</AppBar>
		</header>
	);
}

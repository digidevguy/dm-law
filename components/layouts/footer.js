import {
	Button,
	ButtonGroup,
	ClickAwayListener,
	Container,
	Grow,
	makeStyles,
	MenuItem,
	MenuList,
	Paper,
	Popper,
	Typography,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useRef, useState } from 'react';

import Link from '../../src/Link';

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: '#1651A1',
		color: '#FFFFFF',
		position: 'relative',
		bottom: 0,
		width: '100%',
		padding: theme.spacing(2),
		textAlign: 'center',
		'& button': {
			color: '#FFFFFF',
		},
		'& a': {
			color: '#FFFFFF',
		},
	},
	links: {},
}));

export default function footer() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const anchorRef = useRef(null);

	const handleFooterToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleFooterClose = (e) => {
		if (anchorRef.current && anchorRef.current.contains(e.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(e) {
		if (e.key === 'Tab') {
			e.preventDefault();
			setOpen(false);
		}
	}

	return (
		<footer className={classes.footer}>
			<Container>
				<ButtonGroup>
					<Button variant='text' component={Link} noLinkStyle href='/'>
						<FacebookIcon />
					</Button>
					<Button variant='text' component={Link} noLinkStyle href='/'>
						<LinkedInIcon />
					</Button>
				</ButtonGroup>
			</Container>
			<div className={classes.links}>
				<ButtonGroup variant='text' colot='primary'>
					<Button variant='text' component={Link} noLinkStyle href='/'>
						Home
					</Button>
					<Button variant='text' component={Link} noLinkStyle href='/about'>
						About
					</Button>
					<Button
						ref={anchorRef}
						aria-controls={open ? 'menu-list-grow' : undefined}
						aria-haspopup='true'
						onClick={handleFooterToggle}
					>
						Practice Areas
					</Button>

					<Button variant='text' component={Link} noLinkStyle href='/contact'>
						Contact
					</Button>
					<Button variant='text' component={Link} noLinkStyle href='/'>
						Client Portal
					</Button>
				</ButtonGroup>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					className={classes.popupMenu}
					role={undefined}
					transition
					disablePortal
				>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin:
									placement === 'bottom' ? 'center top' : 'center bottom',
							}}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleFooterClose}>
									<MenuList
										autoFocusItem={open}
										id='menu-list-grow'
										onKeyDown={handleListKeyDown}
									>
										<MenuItem onClick={handleFooterClose}>
											Estate Planning
										</MenuItem>
										<MenuItem onClick={handleFooterClose}>Family Law</MenuItem>
										<MenuItem onClick={handleFooterClose}>
											Business Law
										</MenuItem>
										<MenuItem onClick={handleFooterClose}>
											Intellectual Property
										</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
			<Typography variant='caption'>
				Copyright © 'til the end of time
			</Typography>
		</footer>
	);
}

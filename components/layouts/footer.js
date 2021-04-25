import { useRouter } from 'next/router';
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

import NestedMenuItem from 'material-ui-nested-menu-item';
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
	links: { margin: theme.spacing(1) },
	addressInfo: { padding: theme.spacing(1) },
}));

export default function footer() {
	const classes = useStyles();
	const router = useRouter();
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

	const handleFooterClick = (e, route) => {
		e.preventDefault();
		router.push(route);
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
					<Button
						variant='text'
						component={Link}
						noLinkStyle
						href='https://app.clio.com/client_connect/'
					>
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
										<MenuItem
											onClick={(e) => {
												handleFooterClick(e, '/practice-area/wills-and-trusts');
											}}
										>
											Wills & Trusts
										</MenuItem>
										<MenuItem
											onClick={(e) => {
												handleFooterClick(e, '/practice-area/probate');
											}}
										>
											Probate
										</MenuItem>
										<MenuItem
											onClick={(e) => {
												handleFooterClick(e, '/practice-area/family');
											}}
										>
											Family Law
										</MenuItem>
										<NestedMenuItem
											label='Intellectual Property'
											parentMenuOpen={!!open}
										>
											<MenuItem
												onClick={(e) => {
													handleFooterClick(e, '/practice-area/trademark');
												}}
											>
												Trademark
											</MenuItem>
											<MenuItem
												onClick={(e) => {
													handleFooterClick(e, '/practice-area/trade-secrets');
												}}
											>
												Trade Secrets
											</MenuItem>
										</NestedMenuItem>
										<NestedMenuItem
											label='Business Law'
											parentMenuOpen={!!open}
										>
											<MenuItem
												onClick={(e) => {
													handleFooterClick(e, '/practice-area/formation');
												}}
											>
												Formation
											</MenuItem>
											<MenuItem
												onClick={(e) => {
													handleFooterClick(e, '/practice-area/noncompete-nda');
												}}
											>
												Non-Compete - NDA
											</MenuItem>
										</NestedMenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>

			{/* <Typography variant='h3'>Office Location</Typography> */}
			<div>
				<Typography variant='caption' className={classes.addressInfo}>
					3626 North Hall Street, Ste 610, Dallas, TX 75219.
				</Typography>
				<br />
				<Typography variant='caption' className={classes.addressInfo}>
					In person meeting by appointment only.
				</Typography>
			</div>
			<Typography variant='caption'>
				Copyright © 'til the end of time
			</Typography>
		</footer>
	);
}

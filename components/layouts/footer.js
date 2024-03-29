import { useRouter } from 'next/router';
import {
	Button,
	ButtonGroup,
	ClickAwayListener,
	Container,
	Divider,
	Grid,
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
	ofcInfo: {
		'& .MuiDivider-middle': { backgroundColor: '#FFF', opacity: 0.25 },
		padding: theme.spacing(1),
		maxWidth: '500px',
		justifySelf: 'center',
		margin: 'auto',
	},
	bottomBox: {
		maxWidth: '700px',
		margin: 'auto',
	},
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
					<Button
						variant='text'
						component={Link}
						noLinkStyle
						href='https://www.facebook.com/DyerMauroPLLC'
					>
						<FacebookIcon />
					</Button>
					<Button
						variant='text'
						component={Link}
						noLinkStyle
						href='https://www.linkedin.com/company/dyer-mauro-pllc'
					>
						<LinkedInIcon />
					</Button>
				</ButtonGroup>
			</Container>
			<div className={classes.links}>
				<ButtonGroup variant='text' colot='primary'>
					<Button
						variant='text'
						component={Link}
						noLinkStyle
						href='/'
						size='small'
					>
						Home
					</Button>
					<Button
						variant='text'
						component={Link}
						noLinkStyle
						href='/about'
						size='small'
					>
						About
					</Button>
					<Button
						ref={anchorRef}
						aria-controls={open ? 'menu-list-grow' : undefined}
						aria-haspopup='true'
						onClick={handleFooterToggle}
						size='small'
					>
						Practice Areas
					</Button>

					<Button
						variant='text'
						component={Link}
						noLinkStyle
						href='/contact'
						size='small'
					>
						Contact
					</Button>
					<Button
						variant='text'
						component={Link}
						noLinkStyle
						href='https://app.clio.com/client_connect/'
						size='small'
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
													handleFooterClick(
														e,
														'/practice-area/business-formation'
													);
												}}
											>
												Business Formation
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
			<div>
				<Grid
					container
					justify='center'
					spacing='1'
					className={classes.ofcInfo}
				>
					<Grid item sm={4} xs={12}>
						<Typography>Office Location</Typography>
						<Divider variant='middle' />
						<Typography variant='caption' className={classes.addressInfo}>
							3626 North Hall Street, Ste 610, Dallas, TX 75219.
						</Typography>
						<br />
						<Typography variant='caption' className={classes.addressInfo}>
							In person meeting by appointment only.
						</Typography>
					</Grid>
					<Grid item sm={4} xs={12}>
						<Typography>Office Number </Typography>
						<Divider variant='middle' />
						<Button
							variant='text'
							component={Link}
							href={'tel:+19726561446'}
							noLinkStyle
							passHref
						>
							(972) 656-1446
						</Button>
					</Grid>
					<Grid item sm={4} xs={12}>
						<Typography>Office Hours</Typography>
						<Divider variant='middle' />
						<Typography variant='caption'>
							Monday - Friday 9:00AM - 5:00PM
						</Typography>
					</Grid>
				</Grid>
			</div>
			<Grid
				className={classes.bottomBox}
				container
				justify='center'
				alignItems='center'
			>
				<Grid item sm={6} xs={12}>
					<Typography variant='caption'>
						Copyright © Dyer & Mauro, PLLC
					</Typography>
				</Grid>
				<Grid item sm={6} xs={12}>
					<Typography variant='caption'>
						This website was created by{' '}
						<a href='https://www.mattlittrell.dev' target='_blank'>
							Matthew Littrell
						</a>
						.
					</Typography>
				</Grid>
			</Grid>
		</footer>
	);
}

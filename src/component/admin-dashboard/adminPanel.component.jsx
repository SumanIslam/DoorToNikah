import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import RuleIcon from '@mui/icons-material/Rule';
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from '@mui/icons-material/Home';
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";


// components
import DashBoard from "../manage-biodata/dashboard.component";
import ManageBiodataComponent from "../manage-biodata/manageBiodata.component";
import Settings from "../manage-biodata/settings.component";
import TotalBiodata from "../manage-biodata/totalBiodata.component";
import UnapprovedBiodataProfile from "../manage-biodata/unapproved-biodata-profile/unapproved-biodata-profiile";
import ManageContactRequest from "../manage-biodata/manage-contact-request/manage-contact-request.component";
import ContactRequestDetails from "../manage-biodata/manage-contact-request/contact-request-details.component";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const AdminPanelComponent = (props) => {
  let navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

	const searchData = {
		searchingFor: 'সকল বায়োডাটা',
		maritalStatus: 'সকল',
		mediumOfStudy: 'সকল',
		division: 'সকল বিভাগ',
		district: 'সকল জেলা',
		biodataNo: '',
	};

  const itemsList = [
		{
			text: 'Dashboard',
			icon: <DashboardIcon />,
			onClick: () => navigate('dashboard'),
		},
		{
			text: 'Unapproved Biodata',
			icon: <RuleIcon />,
			onClick: () => navigate('manageBiodatas'),
		},
		{
			text: 'Total Biodata',
			icon: <ScoreboardIcon />,
			onClick: () =>
				navigate('totalBiodata', {
					state: {
						searchData: searchData,
					},
				}),
		},
		{
			text: 'Contact Request',
			icon: <ContactMailIcon />,
			onClick: () =>
				navigate('manage-contact-request'),
		},
		{
			text: 'Manage Roles',
			icon: <SettingsIcon />,
			onClick: () => navigate('settings'),
		},
		{
			text: 'Home',
			icon: <HomeIcon />,
			onClick: () => navigate('/'),
		},
	];
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
		<>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar
					position='fixed'
					open={open}
					sx={{ backgroundColor: '#AD277C' }}
				>
					{/* color code AD277C, 522b79 */}
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={handleDrawerOpen}
							edge='start'
							sx={{
								marginRight: 5,
								...(open && { display: 'none' }),
							}}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' noWrap component='div'>
							<span sx={{ color: 'pink', fontFamily: 'Cinzel Decorative' }}>
								DoorTo
							</span>
							Nikah Dashboard
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer variant='permanent' open={open}>
					<DrawerHeader>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === 'rtl' ? (
								<ChevronRightIcon />
							) : (
								<ChevronLeftIcon />
							)}
						</IconButton>
					</DrawerHeader>
					<Divider />
					<List>
						{itemsList.map((item, index) => {
							const { text, icon, onClick } = item;
							return (
								<ListItemButton
									key={text}
									onClick={onClick}
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
									}}
								>
									{icon && (
										<ListItemIcon
											sx={{
												minWidth: 0,
												mr: open ? 3 : 'auto',
												justifyContent: 'center',
											}}
										>
											{' '}
											{icon}
										</ListItemIcon>
									)}
									<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
								</ListItemButton>
							);
						})}
					</List>
					<Divider />
				</Drawer>
				<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
					<DrawerHeader />
					<Routes>
						<Route path='/dashboard' element={<DashBoard />} />
						<Route
							path='/manageBiodatas'
							element={<ManageBiodataComponent />}
						/>
						<Route
							path='/manageBiodatas/:biodataId'
							element={<UnapprovedBiodataProfile />}
						/>
						<Route
							path='/manageBiodatas/:biodataId'
							element={<UnapprovedBiodataProfile />}
						/>
						<Route path='/totalBiodata' element={<TotalBiodata />} />
						<Route path='/manage-contact-request' element={<ManageContactRequest />} />
						<Route path='/manage-contact-request/:id' element={<ContactRequestDetails />} />
						<Route path='/settings' element={<Settings />} />
					</Routes>
				</Box>
			</Box>
		</>
	);
};

export default AdminPanelComponent;

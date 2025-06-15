import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Divider
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import Menuitems from './MenuItems';
import Logo from '../shared/logo/Logo';

const CustomSidebar = ({ isSidebarOpen, isMobileSidebarOpen, onSidebarClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const sidebarWidth = 270;

  const handleItemClick = (href) => {
    navigate(href);
    if (!lgUp) {
      onSidebarClose();
    }
  };

  const scrollbarStyles = {
    '&::-webkit-scrollbar': {
      width: '7px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#eff2f7',
      borderRadius: '15px',
    },
  };

  const renderMenuItems = () => {
    return Menuitems.map((item) => {
      // Render subheader
      if (item.subheader) {
        return (
          <Box key={item.subheader} sx={{ mt: 2, mb: 1 }}>
            <Typography
              variant="caption"
              sx={{
                px: 3,
                py: 1,
                color: theme.palette.text.secondary,
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                letterSpacing: '0.5px'
              }}
            >
              {item.subheader}
            </Typography>
          </Box>
        );
      }

      // Render menu item
      const Icon = item.icon;
      const isActive = location.pathname === item.href;

      return (
        <ListItem
          key={item.id}
          button
          onClick={() => handleItemClick(item.href)}
          sx={{
            mx: 1,
            mb: 0.5,
            borderRadius: 2,
            backgroundColor: isActive ? theme.palette.primary.main : 'transparent',
            color: isActive ? 'white' : theme.palette.text.primary,
            '&:hover': {
              backgroundColor: isActive 
                ? theme.palette.primary.main 
                : theme.palette.primary.light,
              color: isActive ? 'white' : theme.palette.primary.main,
            },
            transition: 'all 0.2s ease-in-out'
          }}
        >
          <ListItemIcon 
            sx={{ 
              color: isActive ? 'white' : theme.palette.text.secondary,
              minWidth: 40,
              '&:hover': {
                color: isActive ? 'white' : theme.palette.primary.main,
              }
            }}
          >
            <Icon size={20} />
          </ListItemIcon>
          <ListItemText 
            primary={item.title}
            sx={{
              '& .MuiListItemText-primary': {
                fontSize: '0.9rem',
                fontWeight: isActive ? 600 : 400
              }
            }}
          />
        </ListItem>
      );
    });
  };

  const sidebarContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Logo Section */}
      <Box sx={{ 
        p: 2, 
        borderBottom: '1px solid #eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Logo />
      </Box>

      {/* Menu Items */}
      <Box sx={{ 
        flexGrow: 1, 
        overflow: 'auto',
        py: 1,
        ...scrollbarStyles
      }}>
        <List sx={{ p: 0 }}>
          {renderMenuItems()}
        </List>
      </Box>

      {/* Footer */}
      <Box sx={{ 
        p: 2, 
        borderTop: '1px solid #eee',
        textAlign: 'center'
      }}>
        <Typography variant="caption" color="text.secondary">
          Admin Panel v1.0
        </Typography>
      </Box>
    </Box>
  );

  // Desktop Sidebar
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="permanent"
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: sidebarWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid #e0e0e0',
            ...scrollbarStyles
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    );
  }

  // Mobile Sidebar
  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      sx={{
        '& .MuiDrawer-paper': {
          width: sidebarWidth,
          boxSizing: 'border-box',
          ...scrollbarStyles
        },
      }}
    >
      {sidebarContent}
    </Drawer>
  );
};

export default CustomSidebar;
import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const styles = {
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  }
};

const BottomMenu = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={styles.bottomNav}
    >
      <BottomNavigationAction label="ホーム" icon={<HomeIcon />} />
      <BottomNavigationAction label="検索" icon={<SearchIcon />} />
      <BottomNavigationAction label="通知" icon={<NotificationsIcon />} />
      <BottomNavigationAction label="プロフィール" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}

export default BottomMenu;

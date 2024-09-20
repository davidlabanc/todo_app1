"use client"
import { useEffect, useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const DarkModeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <div className='flex justify-end w-auto '>
      <button onClick={toggleTheme} className="py-2 px-4 text-white" data-test='theme-button'>
        {
          theme === 'light' ? 
          <LightModeIcon fontSize='large' className='text-gray-800' data-test='light-mode-icon'/> : 
          <DarkModeIcon fontSize='large' className='text-neutral-200' data-test='dark-mode-icon'/>
        }
      </button>
    </div>

  );
};

export default DarkModeToggle;

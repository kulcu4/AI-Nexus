
import React from 'react';
import { HomeIcon, PromptIcon, GalleryIcon, SettingsIcon } from './icons/NavIcons';

type Page = 'generators' | 'prompt' | 'gallery' | 'settings';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  page: Page;
  currentPage: Page;
  setPage: (page: Page) => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, page, currentPage, setPage }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      setPage(page);
    }}
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
      currentPage === page
        ? 'bg-[#28233E] text-white'
        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </a>
);

interface SidebarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, setPage }) => {
  const navItems: { icon: React.ReactNode; label: string; page: Page }[] = [
    { icon: <HomeIcon />, label: 'Generators', page: 'generators' },
    { icon: <PromptIcon />, label: 'Prompt', page: 'prompt' },
    { icon: <GalleryIcon />, label: 'Gallery', page: 'gallery' },
    { icon: <SettingsIcon />, label: 'Settings', page: 'settings' },
  ];

  return (
    <aside className="w-full lg:w-64 bg-[#161B22] p-4 rounded-xl flex-shrink-0">
      <div className="flex flex-col h-full">
        <div className="flex items-center space-x-3 mb-8">
          <img
            src="https://picsum.photos/seed/user/40/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-white">Olivia</p>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          {navItems.map(item => (
            <NavItem key={item.page} {...item} currentPage={currentPage} setPage={setPage} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

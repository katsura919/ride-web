import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Menu, Bell } from "lucide-react";
import { useSidebarContext } from "./side-bar-new";
import { ModeToggle } from "../mode-toggle";

interface TopBarProps {
  className?: string;
  title?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ 
  className,
  title = "Dashboard"
}) => {
  const { toggleSidebar } = useSidebarContext();

  return (
    <motion.header
      className={cn(
        "bg-background px-4 py-4",
        "flex items-center justify-between shadow-sm h-[64px]",
        className
      )}
      layout
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {/* Left side - Menu button and title */}
      <div className="flex items-center space-x-3">
        <motion.button
          onClick={toggleSidebar}
          className={cn(
            "p-2 rounded-lg hover:bg-gray-100 transition-colors",
            "text-gray-600 hover:text-gray-900 lg:hidden xl:flex"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <Menu className="w-5 h-5" />
        </motion.button>

        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        </div>
      </div>

      {/* Right side - User profile and notifications */}
      <div className="flex items-center space-x-3">
        {/* Notifications */}
        <motion.button
          className={cn(
            "relative p-2 rounded-lg hover:bg-gray-100 transition-colors",
            "text-gray-600 hover:text-gray-900"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Bell className="w-5 h-5" />
          {/* Notification badge */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </motion.button>

        {/* Mode Toggle */}
        <ModeToggle />

        {/* User Profile */}
        <UserProfileDropdown />
      </div>
    </motion.header>
  );
};

const UserProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
          alt="Profile"
          className="w-7 h-7 rounded-full object-cover border-2 border-gray-200"
        />
        <div className="hidden md:flex flex-col items-start">
          <span className="text-xs font-medium text-gray-900">John Doe</span>
          <span className="text-xs text-gray-500">Admin</span>
        </div>
      </motion.button>

      {/* Dropdown menu - you can expand this later */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={cn(
            "absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200",
            "py-2 z-50"
          )}
        >
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            View Profile
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Settings
          </a>
          <hr className="my-1 border-gray-200" />
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Sign Out
          </a>
        </motion.div>
      )}
    </div>
  );
};

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Menu, 
         Bell,
         ChevronsUpDown 
} from "lucide-react";
import { useSidebarContext } from "./side-bar";
import { ModeToggle } from "../mode-toggle";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

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
        "bg-sidebar px-4 py-4",
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
        <Button
          onClick={toggleSidebar}
          className={cn(
            "p-2 rounded-lg transition-colors cursor-pointer",
            "text-primary  xl:flex"
          )}
          variant="ghost"
          size="icon"
        >
          <Menu className="w-5 h-5" />
        </Button>

        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-primary">{title}</h1>
        </div>
      </div>

      {/* Right side - User profile and notifications */}
      <div className="flex items-center space-x-3">
        {/* Notifications */}
        <Button
          className={cn(
            "relative p-2 rounded-lg transition-colors cursor-pointer"
          )}
          variant="ghost"
          size="icon"
        >
          <Bell className="w-5 h-5 text-primary" strokeWidth={2} />
          {/* Notification badge */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>

        {/* Mode Toggle */}
        <ModeToggle />

        {/* User Profile */}
        <UserProfileDropdown />
      </div>
    </motion.header>
  );
};

const UserProfileDropdown: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center pr-2 rounded-lg transition-colors cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover"
          />
          <ChevronsUpDown className="ml-1 w-5 h-5 text-primary" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-3 py-2">
          <div className="font-medium text-sm text-priamry">John Doe</div>
          <div className="text-xs text-gray-400">Admin</div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

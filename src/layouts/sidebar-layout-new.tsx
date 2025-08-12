import { Outlet, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarNav,
  SidebarNavItem,
  SidebarGroup,
  useSidebarContext,
} from "../components/ui/side-bar-new";
import { TopBar } from "../components/ui/top-bar";
import { motion, AnimatePresence } from "motion/react";
import { 
  LayoutDashboard, 
  Plus, 
  Car, 
  Settings,
  Bell,
  BarChart3
} from "lucide-react";

export default function NewDashboardLayout() {
  const location = useLocation();

  // Get page title based on current route
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/dashboard/add-vehicle":
        return "Add Vehicle";
      case "/dashboard/vehicle-management":
        return "Vehicle Management";
      case "/dashboard/settings":
        return "Settings";
      case "/dashboard/analytics":
        return "Analytics";
      case "/dashboard/notifications":
        return "Notifications";
      default:
        return "Dashboard";
    }
  };

  // Logo component
  const Logo = () => {
    const { isOpen, isMobile } = useSidebarContext();
    const showFullLogo = isOpen || isMobile;
    
    return (
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
          <Car className="w-5 h-5 text-white" />
        </div>
        <AnimatePresence>
          {showFullLogo && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col overflow-hidden"
            >
              <span className="font-bold text-gray-900 whitespace-nowrap">Ride Alert</span>
              <span className="text-xs text-gray-500 whitespace-nowrap">Vehicle Management</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  // Navigation links
  const mainNavLinks = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      isActive: location.pathname === "/dashboard",
    },
    {
      label: "Add Vehicle",
      href: "/dashboard/add-vehicle",
      icon: <Plus className="w-5 h-5" />,
      isActive: location.pathname === "/dashboard/add-vehicle",
    },
    {
      label: "Vehicle Management",
      href: "/dashboard/vehicle-management",
      icon: <Car className="w-5 h-5" />,
      isActive: location.pathname === "/dashboard/vehicle-management",
      badge: "12",
    },
    {
      label: "Analytics",
      href: "/dashboard/analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      isActive: location.pathname === "/dashboard/analytics",
    },
  ];

  const settingsNavLinks = [
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="w-5 h-5" />,
      isActive: location.pathname === "/dashboard/settings",
    },
    {
      label: "Notifications",
      href: "/dashboard/notifications",
      icon: <Bell className="w-5 h-5" />,
      isActive: location.pathname === "/dashboard/notifications",
      badge: "3",
    },
  ];

  return (
    <SidebarProvider defaultOpen={false}>
      <motion.div 
        className="flex h-screen bg-gray-50 overflow-hidden relative"
        layout
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <Sidebar>
          <SidebarHeader>
            <Logo />
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup label="Main">
              <SidebarNav>
                {mainNavLinks.map((link) => (
                  <SidebarNavItem key={link.href} link={link} />
                ))}
              </SidebarNav>
            </SidebarGroup>

            <SidebarGroup label="Management">
              <SidebarNav>
                {settingsNavLinks.map((link) => (
                  <SidebarNavItem key={link.href} link={link} />
                ))}
              </SidebarNav>
            </SidebarGroup>
          </SidebarContent>

          {/* Remove the footer with user profile since it's now in topbar */}
        </Sidebar>

        {/* Main content area */}
        <motion.div 
          className="flex-1 flex flex-col min-w-0"
          layout
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {/* Top Bar */}
          <TopBar title={getPageTitle()} />

          {/* Top navigation bar for mobile - Remove this since TopBar handles it */}
          
          {/* Page content */}
          <motion.main 
            className="flex-1 overflow-hidden"
            layout
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <Outlet />
          </motion.main>
        </motion.div>
      </motion.div>
    </SidebarProvider>
  );
}

import { Outlet } from "react-router-dom";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import { LayoutDashboard, Plus, Car, Settings } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function DashboardLayout() {
  // Logo components
  const Logo = () => (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-white"
      >
        Ride Alert
      </motion.span>
    </a>
  );

  const LogoIcon = () => (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-white" />
    </a>
  );
  const [open, setOpen] = useState(false);
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5 shrink-0 text-white" />,
    },
    {
      label: "Add Vehicle",
      href: "/dashboard/add-vehicle",
      icon: <Plus className="h-5 w-5 shrink-0  text-white" />,
    },
    {
      label: "Vehicle Management",
      href: "/dashboard/vehicle-management",
      icon: <Car className="h-5 w-5 shrink-0  text-neutral-200" />,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="h-5 w-5 shrink-0  text-neutral-200" />,
    },
  ];
  return (
    <div className={cn("h-screen w-full flex bg-neutral-800 text-white overflow-hidden")}> 
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 bg-neutral-800 min-h-0">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <div className="flex items-center gap-2 mb-8">
              {open ? <Logo /> : <LogoIcon />}
            </div>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} className="text-white" />
              ))}
            </div>
          </div>
          <div >
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "/dashboard/profile",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex-1 h-full">
        <Outlet />
      </div>
    </div>
  );
}

import { Outlet } from "react-router-dom";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import { IconLayoutDashboard, IconPlus, IconCar, IconSettings } from "@tabler/icons-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <IconLayoutDashboard className="h-5 w-5 shrink-0 text-white" />,
    },
    {
      label: "Add Vehicle",
      href: "/dashboard/add-vehicle",
      icon: <IconPlus className="h-5 w-5 shrink-0  text-neutral-200" />,
    },
    {
      label: "Vehicle Management",
      href: "/dashboard/vehicle-management",
      icon: <IconCar className="h-5 w-5 shrink-0  text-neutral-200" />,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: <IconSettings className="h-5 w-5 shrink-0  text-neutral-200" />,
    },
  ];
  return (
    <div className={cn("h-screen w-full flex bg-neutral-800 text-white overflow-hidden")}> 
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 bg-neutral-800 min-h-0">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <div className="flex items-center gap-2 mb-8 px-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg text-neutral-900">Ride Alert</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} className="text-white" />
              ))}
            </div>
          </div>
          <div className="mb-1">
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

import { ScrollArea } from "@/components/ui/scroll-area";

import { vehicles } from "../data/vehicle-data";
import { DashboardCountCard } from "@/components/dashboard-count-card";
import { Car, CheckCircle, XCircle, AlertCircle, Search, Grid3X3, List, ChevronDown, ListFilter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DashboardVehicleCard } from "@/components/dashboard-vehicle-card";
import { VehicleListView } from "@/components/vehicle-list-view";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedVehicleType, setSelectedVehicleType] = useState("Any");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [loading, setLoading] = useState(true);

  // Simulate loading for demo (replace with real loading logic as needed)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Count vehicles by status
  const total = vehicles.length;
  const available = vehicles.filter(v => v.status === 'available').length;
  const full = vehicles.filter(v => v.status === 'full').length;
  const unavailable = vehicles.filter(v => v.status === 'unavailable').length;

  // Filter vehicles by type
  const filteredVehicles = vehicles.filter((v) => {
    if (selectedVehicleType === "Any") return true;
    if (selectedVehicleType.toLowerCase() === "available") return v.status === "available";
    if (selectedVehicleType.toLowerCase() === "full") return v.status === "full";
    if (selectedVehicleType.toLowerCase() === "unavailable") return v.status === "unavailable";
    return true;
  });

  return (
    <ScrollArea className="h-screen w-full">
      <div className="flex flex-col min-h-screen w-full flex-1 gap-6 px-7 bg-background text-card-foreground p-5 mb-10">

        {/* Vehicle Count Cards */}
        <div className="grid w-full gap-5 mb-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <DashboardCountCard label="Total Vehicles" count={total} icon={<Car className="text-primary w-6 h-6" />} subtext={""} />
          <DashboardCountCard label="Available" count={available} icon={<CheckCircle className="text-green-400 w-6 h-6" />} percent={total > 0 ? Math.round((available / total) * 100) : 0} />
          <DashboardCountCard label="Full" count={full} icon={<XCircle className="text-orange-400 w-6 h-6" />} percent={total > 0 ? Math.round((full / total) * 100) : 0} />
          <DashboardCountCard label="Unavailable" count={unavailable} icon={<AlertCircle className="text-blue-400 w-6 h-6" />} percent={total > 0 ? Math.round((unavailable / total) * 100) : 0} />
        </div>

        {/* Header with title and count */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
            All vehicles
            <span className="text-sm font-normal text-muted-foreground bg-muted px-2 py-1 rounded-md">
              {filteredVehicles.length}
            </span>
          </h2>
        </div>

        {/* Filter Section */}
        <div className="flex items-center justify-between gap-4 rounded-lg">
          {/* Left side - Search only */}
          <div className="flex items-center gap-4 flex-1">
            {/* Search Vehicle */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="bg-card w-full pl-10 pr-4 py-2 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Right side - Filter Dropdown and View Toggle */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg bg-card text-foreground hover:bg-muted transition-colors">
                  <ListFilter className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{selectedVehicleType}</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setSelectedVehicleType("Any")}>Any</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedVehicleType("Available")}>Available</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedVehicleType("Full")}>Full</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedVehicleType("Unavailable")}>Unavailable</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center gap-2 bg-card p-1 rounded-lg border border-border">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Vehicle Display */}
        {loading ? (
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-6 2xl:gap-5 xl:gap-8 mb-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="relative px-4">
                    <Skeleton className="w-full h-42 rounded-lg mb-2" />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Skeleton className="h-4 w-2/3 mb-2" />
                        <Skeleton className="h-3 w-1/3" />
                      </div>
                      <Skeleton className="h-5 w-16 ml-2 rounded-full" />
                    </div>
                    <div className="border-t border-border my-2" />
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center text-sm">
                        <Skeleton className="h-3 w-1/3" />
                        <Skeleton className="h-3 w-8" />
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <Skeleton className="h-3 w-1/3" />
                        <div className="flex items-center gap-1.5">
                          <Skeleton className="h-3 w-16" />
                          <Skeleton className="h-3 w-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredVehicles.length === 0 ? (
          <div className="flex items-center justify-center h-40 text-muted-foreground text-lg font-medium">No Vehicles</div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-6 2xl:gap-5 xl:gap-8 mb-10">
            {filteredVehicles.map((v, i) => (
              <DashboardVehicleCard
                key={i}
                img={v.img}
                title={v.route}
                subtitle={`ETA: ${v.eta}`}
                status={getVehicleStatusFromData(v.status)}
                statusColor={getStatusColorFromData(v.status)}
                orderCompleted={v.seats}
                lastCheckIn={v.eta}
                lastCheckInAgo={v.status === 'available' ? 'Available' : v.status === 'full' ? 'Full' : 'Unavailable'}
                maxLoad={v.seats > 0 ? `${v.seats} seats` : 'No seats'}
                driver={"-"}
              />
            ))}
          </div>
        ) : (
          <VehicleListView
            vehicles={filteredVehicles.map((v) => ({
              img: v.img,
              title: v.route,
              subtitle: `ETA: ${v.eta}`,
              status: getVehicleStatusFromData(v.status),
              statusColor: getStatusColorFromData(v.status),
              orderCompleted: v.seats,
              lastCheckIn: v.eta,
              lastCheckInAgo: v.status === 'available' ? 'Available' : v.status === 'full' ? 'Full' : 'Unavailable',
              maxLoad: v.seats > 0 ? `${v.seats} seats` : 'No seats',
              driver: "-",
              onViewDetails: () => {},
            }))}
          />
        )}
      </div>
    </ScrollArea>
  );
}

// Helper functions for vehicle data
function getVehicleStatusFromData(status: string): string {
  switch (status) {
    case 'available':
      return 'Available';
    case 'full':
      return 'Full';
    case 'unavailable':
      return 'Unavailable';
    default:
      return status;
  }
}

function getStatusColorFromData(status: string): string {
  switch (status) {
    case 'available':
      return "text-white bg-green-500";
    case 'full':
      return "text-white bg-orange-500";
    case 'unavailable':
      return "text-white bg-gray-500";
    default:
      return "text-white bg-gray-500";
  }
}

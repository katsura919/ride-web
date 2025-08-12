
import { DashboardHeader } from "@/components/dashboard-header";

import { vehicles } from "../data/vehicle-data";
import type { VehicleStatus } from "../data/vehicle-data";

const statusMap: Record<VehicleStatus, { color: string; label: string }> = {
  available: { color: "bg-green-500", label: "Available" },
  full: { color: "bg-red-500", label: "Full" },
  unavailable: { color: "bg-gray-400", label: "Unavailable" },
};

export default function DashboardPage() {
  return (
  <div className="flex flex-col h-full w-full flex-1 gap-6 bg-background text-card-foreground mt-1 p-4  border border-border rounded-tl-2xl">
      {/* Dashboard header */}
      <DashboardHeader />
      {/* Status legend and Add Vehicle */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
            <span className="text-sm text-muted-foreground">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            <span className="text-sm text-muted-foreground">Full</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-400 inline-block" />
            <span className="text-sm text-muted-foreground">Unavailable</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-secondary text-primary font-semibold shadow hover:bg-secondary-foreground hover:text-secondary transition">
            <span className="text-2xl leading-none">+</span> Add Vehicle
          </button>
          <button className="p-2 rounded-full hover:bg-muted transition">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M3 6h18M3 12h18M3 18h18" /><circle cx="19" cy="6" r="2" /><circle cx="19" cy="12" r="2" /><circle cx="19" cy="18" r="2" /></svg>
          </button>
        </div>
      </div>
      {/* Vehicle cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto">
        {vehicles.map((v, i) => (
          <div key={i} className="relative bg-card rounded-2xl shadow p-4 flex flex-col gap-2 border border-border hover:shadow-lg transition">
            {/* Status dot */}
            <span className={`absolute top-3 right-3 w-3 h-3 rounded-full border-2 border-card ${statusMap[v.status].color}`} />
            {/* Vehicle image */}
            <img src={v.img} alt="vehicle" className="w-full h-36 object-cover rounded-xl border border-border" />
            {/* Info */}
            <div className="flex flex-col gap-1 mt-2">
              <div className="font-semibold text-foreground">Plate number: <span className="font-bold">{v.plate}</span></div>
              <div className="text-muted-foreground">Route: <span className="font-bold text-foreground">{v.route}</span></div>
              <div className="text-muted-foreground">ETA: <span className="font-bold text-foreground">{v.eta}</span></div>
              <div className="text-muted-foreground">Available Seats: <span className="font-bold text-foreground">{v.seats}</span></div>
            </div>
            {/* Book button */}
            <button className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-full p-2 shadow hover:bg-primary-foreground hover:text-primary transition">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline"><path d="M12 19l9 2-9-18-9 18 9-2z" /></svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";

export interface DashboardVehicleCardProps {
  img: string;
  title: string;
  subtitle: string;
  status: string;
  statusColor: string;
  orderCompleted: number;
  lastCheckIn: string;
  lastCheckInAgo: string;
  maxLoad: string;
  driver: string;
  className?: string;
}

export const DashboardVehicleCard: React.FC<DashboardVehicleCardProps> = ({
  img,
  title,
  subtitle,
  status,
  statusColor,
  orderCompleted,
  maxLoad,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/dashboard/maps');
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 relative overflow-hidden  "
      onClick={handleCardClick}
    >
      <CardContent className="p-0">
        {/* Vehicle Image */}
        <div className="relative px-4">
          <img 
            src={img} 
            alt="vehicle" 
            className="object-cover w-full h-42 rounded-lg transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        
        {/* Glassmorphism Overlay with Location Icon - Covers entire card */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-2">
            <MapPin className="w-8 h-8 text-white drop-shadow-lg" />
            <p className="text-white text-sm font-medium drop-shadow-lg">View Location</p>
          </div>
        </div>
        
        {/* Card Content */}
        <div className="p-4 space-y-3">
          {/* Title and Status */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-base text-foreground leading-tight">{title}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
            </div>
            <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ml-2", statusColor)}>
              {status}
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Details Grid */}
          <div className="">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Available Seat</span>
              <span className="font-medium text-foreground">{orderCompleted}</span>
            </div>
            
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Max. load capacity</span>
              <span className="font-medium text-foreground">{maxLoad}</span>
            </div>
        
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
  onViewDetails?: () => void;
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
  onViewDetails,
}) => {
  return (
    <Card>
      <CardContent className="p-0">
        {/* Vehicle Image */}
        <div className="relative p-4">
          <img 
            src={img} 
            alt="vehicle" 
            className="object-cover w-full h-42 rounded-lg " 
          />
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
              <span className="text-muted-foreground">Order completed</span>
              <span className="font-medium text-foreground">{orderCompleted}</span>
            </div>
            
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Max. load capacity</span>
              <span className="font-medium text-foreground">{maxLoad}</span>
            </div>
        
          </div>

          {/* View Details Button */}
          <button
            className="bg-primary w-full mt-4 border border-border text-background rounded-lg py-2.5 font-medium text-sm transition-colors cursor-pointer hover:bg-muted-foreground"
            onClick={onViewDetails}
          >
            View details
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

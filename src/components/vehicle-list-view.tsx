import React from "react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface VehicleListItem {
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
}

export interface VehicleListViewProps {
  vehicles: VehicleListItem[];
}

export const VehicleListView: React.FC<VehicleListViewProps> = ({ vehicles }) => {
  return (
    <div className="bg-background">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-b border-border">
            <TableHead className="w-[200px] font-semibold">Vehicle</TableHead>
            <TableHead className="font-semibold">Route</TableHead>
            <TableHead className="font-semibold">ETA</TableHead>
            <TableHead className="font-semibold">Seats</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles.map((vehicle, index) => (
            <TableRow key={index} className="hover:bg-muted/50 min-h-[72px] h-[72px]">
              {/* Vehicle Image */}
              <TableCell className="py-4 align-middle">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                    <img
                      src={vehicle.img}
                      alt="vehicle"
                      className="object-cover w-14 h-12"
                    />
                  </div>
                </div>
              </TableCell>
              {/* Route */}
              <TableCell className="py-4 align-middle">
                <span className="font-medium text-foreground text-sm">{vehicle.title}</span>
              </TableCell>
              {/* ETA */}
              <TableCell className="py-4 align-middle">
                <span className="text-sm text-muted-foreground">{vehicle.subtitle.replace('ETA: ', '')}</span>
              </TableCell>
              {/* Seats */}
              <TableCell className="py-4 align-middle">
                <span className="font-medium text-foreground text-sm">{vehicle.orderCompleted}</span>
              </TableCell>
              {/* Status */}
              <TableCell className="py-4 align-middle">
                <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full", vehicle.statusColor)}>
                  {vehicle.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

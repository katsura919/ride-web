
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";

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
  // Pagination state
  const [page, setPage] = useState(1);
  const pageSize = 7;
  const totalPages = Math.ceil(vehicles.length / pageSize);

  // Selection state
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Paginated vehicles
  const paginatedVehicles = vehicles.slice((page - 1) * pageSize, page * pageSize);

  // Select all handler
  const allSelected = paginatedVehicles.length > 0 && paginatedVehicles.every((_, idx) => selectedRows.includes((page - 1) * pageSize + idx));
  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedRows(selectedRows.filter(idx => idx < (page - 1) * pageSize || idx >= page * pageSize));
    } else {
      const newSelected = paginatedVehicles.map((_, idx) => (page - 1) * pageSize + idx);
      setSelectedRows([...selectedRows, ...newSelected.filter(idx => !selectedRows.includes(idx))]);
    }
  };

  // Select single row
  const handleSelectRow = (idx: number) => {
    if (selectedRows.includes(idx)) {
      setSelectedRows(selectedRows.filter(i => i !== idx));
    } else {
      setSelectedRows([...selectedRows, idx]);
    }
  };

  return (
    <div className="bg-card overflow-hidden rounded-md border p-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={handleSelectAll}
                aria-label="Select all"
                className="accent-primary"
              />
            </TableHead>
            <TableHead className="w-20 font-semibold">Image</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Vehicle</TableHead>
            <TableHead className="font-semibold">Route</TableHead>
            <TableHead className="font-semibold">Seats</TableHead>
            <TableHead className="font-semibold">Driver</TableHead>
            <TableHead className="font-semibold">Amount</TableHead>
            <TableHead className="w-10"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedVehicles.map((vehicle, idx) => {
            const globalIdx = (page - 1) * pageSize + idx;
            return (
              <ContextMenu key={globalIdx}>
                <ContextMenuTrigger asChild>
                  <TableRow data-selected={selectedRows.includes(globalIdx)} className="h-24 min-h-[96px]">
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(globalIdx)}
                        onChange={() => handleSelectRow(globalIdx)}
                        aria-label={`Select row ${globalIdx + 1}`}
                        className="accent-primary"
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                          <img
                            src={vehicle.img}
                            alt="vehicle"
                            className="object-cover w-16 h-14"
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full", vehicle.statusColor)}>
                        {vehicle.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium text-foreground text-sm">{vehicle.title}</span>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium text-foreground text-sm">{vehicle.subtitle.replace('ETA: ', '')}</span>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium text-foreground text-sm">{vehicle.orderCompleted}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-muted-foreground">{vehicle.driver}</span>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium text-foreground text-sm">$316.00</span>
                    </TableCell>
                  </TableRow>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem onClick={() => alert(`Edit vehicle: ${vehicle.title}`)}>Edit</ContextMenuItem>
                  <ContextMenuItem variant="destructive" onClick={() => alert(`Delete vehicle: ${vehicle.title}`)}>Delete</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            );
          })}
        </TableBody>
      </Table>
      {/* Pagination controls outside the table */}
      <div className="flex items-center justify-between w-full pt-4">
        <span className="text-sm text-muted-foreground font-medium">{`${selectedRows.length} of ${vehicles.length} row(s) selected.`}</span>
        <div className="flex items-center gap-4">
          <button
            className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-semibold text-foreground hover:bg-muted transition disabled:opacity-50"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          <span className="text-base font-semibold text-foreground">Page {page} of {totalPages}</span>
          <button
            className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-semibold text-foreground hover:bg-muted transition disabled:opacity-50"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

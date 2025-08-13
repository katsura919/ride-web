import {ScrollArea} from "@/components/ui/scroll-area";

export default function VehicleManagement() {
  return (
     <ScrollArea className="h-screen w-full">
      <div className="flex flex-col min-h-screen w-full flex-1 gap-6 px-7 bg-background text-card-foreground p-5 mb-10">
        <h1 className="text-2xl font-bold">Vehicle Management</h1>
        <p className="text-sm text-muted-foreground">
          Fill in the details below to add a new vehicle.
        </p>
      </div>
    </ScrollArea>
  );
}


import React from "react";
import { Card, CardContent } from "@/components/ui/card";


interface DashboardCountCardProps {
  label: string;
  count: number;
  icon?: React.ReactNode;
  className?: string;
}

export const DashboardCountCard: React.FC<DashboardCountCardProps> = ({ label, count, icon, className }) => {
  return (
    <Card className={className + " min-w-[120px] flex flex-col items-center justify-center p-4"}>
      <CardContent className="bg-card flex flex-col items-center justify-center p-0">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <span className="text-2xl font-bold">{count}</span>
        </div>
        <span className="text-sm text-muted-foreground font-medium">{label}</span>
      </CardContent>
    </Card>
  );
};

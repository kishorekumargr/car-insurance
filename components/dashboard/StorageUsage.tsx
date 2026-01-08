import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";

export default function StorageUsage() {
  return (
    <Card className="bg-linear-to-br from-blue-500 to-blue-700 text-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <h3 className="font-semibold">Storage Usage</h3>
        <MoreVertical className="h-4 w-4 opacity-80" />
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-6">
        {/* Circle */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-32 w-32 rounded-full border-8 border-white/30 flex items-center justify-center">
            <span className="text-2xl font-bold">25%</span>
          </div>
          <p className="text-sm opacity-80 mt-2">124 GB out of 500 GB</p>
        </div>

        {/* Breakdown */}
        <div className="space-y-3 text-sm">
          <UsageItem label="Policy Files" value="60 GB" percent="12%" />
          <UsageItem label="Vehicle Registrations" value="35 GB" percent="7%" />
          <UsageItem label="Inspection Reports" value="30 GB" percent="6%" />
        </div>
      </CardContent>
    </Card>
  );
}

function UsageItem({ label, value, percent }: { label: string; value: string; percent: string }) {
  return (
    <div className="rounded-lg bg-white/10 p-3">
      <p>
        {percent} · {value}
      </p>
      <p className="opacity-80">{label}</p>
    </div>
  );
}

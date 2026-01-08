import { Card } from "@/components/ui/card";

export function StorageUsageCard() {
  return (
    <Card className="p-6 bg-linear-to-br from-blue-500 to-blue-700 text-white">
      <h3 className="font-semibold mb-4">Storage Usage</h3>

      <div className="flex items-center gap-6">
        <div className="relative h-32 w-32 rounded-full border-4 border-white/40 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-semibold">25%</p>
            <p className="text-xs">124 GB / 500 GB</p>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <p>12% · Policy Files</p>
          <p>7% · Vehicle Registrations</p>
          <p>6% · Inspection Reports</p>
        </div>
      </div>
    </Card>
  );
}

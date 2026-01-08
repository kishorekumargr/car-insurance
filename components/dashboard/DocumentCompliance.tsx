import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";

export default function DocumentCompliance() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <h3 className="font-semibold">Document Compliance</h3>
        <MoreVertical className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Progress Bar */}
        <div className="h-2 w-full rounded bg-muted overflow-hidden">
          <div className="h-full bg-orange-400 w-[16%]" />
          <div className="h-full bg-yellow-400 w-[62%]" />
          <div className="h-full bg-teal-400 w-[22%]" />
        </div>

        {/* Status Stats */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <Stat label="Expired" value={5} />
          <Stat label="Incomplete" value={23} />
          <Stat label="Invalid Doc" value={7} />
        </div>

        {/* Footer */}
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>
            <strong className="text-foreground">421</strong> Valid Documents
          </span>
          <span>
            <strong className="text-foreground">48</strong> Pending Review
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border p-3">
      <p className="font-medium">{value}</p>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
}

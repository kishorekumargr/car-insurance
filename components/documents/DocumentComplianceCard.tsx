import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export function DocumentComplianceCard() {
  return (
    <Card className="p-4 space-y-4">
      <h3 className="font-semibold">Document Compliance</h3>

      <div className="flex justify-between text-sm">
        <span>Expired</span>
        <span>Incomplete</span>
        <span>Invalid</span>
      </div>

      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div className="h-full w-[62%] bg-yellow-400" />
      </div>

      <div className="flex justify-between text-sm">
        <div>
          <p className="text-xl font-semibold">421</p>
          <p className="text-muted-foreground">Valid Documents</p>
        </div>
        <div>
          <p className="text-xl font-semibold">48</p>
          <p className="text-muted-foreground">Pending Review</p>
        </div>
      </div>

      <div className="flex items-start gap-2 bg-muted p-3 rounded-md text-sm">
        <AlertCircle size={16} />
        Some are close to expiring, incomplete, or failed validation.
      </div>
    </Card>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function ExpiringSoon() {
  return (
    <Card>
      <CardContent className="space-y-3 p-6">
        <AlertTriangle className="text-red-500" />
        <p className="text-sm text-muted-foreground">Expiring Soon</p>
        <h2 className="text-3xl font-bold">15</h2>
        <p className="text-sm text-muted-foreground">Re-request required</p>
      </CardContent>
    </Card>
  );
}

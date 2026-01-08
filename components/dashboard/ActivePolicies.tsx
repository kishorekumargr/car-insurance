import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function ActivePolicies() {
  return (
    <Card>
      <CardContent className="space-y-3 p-6">
        <CheckCircle className="text-green-500" />
        <p className="text-sm text-muted-foreground">Active Policies</p>
        <h2 className="text-3xl font-bold">420</h2>
        <p className="text-sm text-muted-foreground">Don’t need attention</p>
      </CardContent>
    </Card>
  );
}

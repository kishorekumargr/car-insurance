import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function DocumentsHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold">Documents</h1>
      <Button className="gap-2">
        <Plus size={16} />
        New Document
      </Button>
    </div>
  );
}

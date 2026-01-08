import { FileText, Image } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ReminderItem = {
  id: string;
  issue: string;
  dueDate: string;
  assignee: string;
  attachment: string;
  attachmentType: "pdf" | "png";
  status?: "error" | "warning" | "success";
};

export function ReminderCard({ item }: { item: ReminderItem }) {
  return (
    <Card className="p-4 space-y-4">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{item.id}</span>
        <StatusBadge status={item.status} />
      </div>

      <div>
        <p className="text-sm text-muted-foreground">Issue</p>
        <p className="font-medium">{item.issue}</p>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Due Date</span>
        <span>{item.dueDate}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Assignee</span>
        <span>{item.assignee}</span>
      </div>

      <div className="flex items-center gap-2 text-sm">
        {item.attachmentType === "pdf" ? <FileText size={16} /> : <Image size={16} />}
        {item.attachment}
      </div>
    </Card>
  );
}

function StatusBadge({ status }: { status?: "error" | "warning" | "success" }) {
  return (
    <span
      className={cn(
        "text-xs px-2 py-1 rounded-full",
        status === "error" && "bg-red-100 text-red-600",
        status === "warning" && "bg-yellow-100 text-yellow-700",
        status === "success" && "bg-green-100 text-green-600"
      )}
    >
      {status}
    </span>
  );
}

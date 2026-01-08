import { ReminderCard } from "@/components/reminders/ReminderCard";
import { ReminderItem } from "@/lib/types";

const DATA: ReminderItem[] = [
  {
    id: "#86468",
    issue: "Cuurrent Policy",
    dueDate: "28-05-2025",
    assignee: "Michael S.",
    attachment: "Reg_OK.pdf",
    attachmentType: "pdf",
    status: "error",
  },
  {
    id: "#12828",
    issue: "Expired Policy",
    dueDate: "29-03-2025",
    assignee: "Emma D.",
    attachment: "Reg_OK.pdf",
    attachmentType: "png",
    status: "warning",
  },
];

export default function Reminders() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40 p-8">
      <h2 className="text-2xl font-semibold mb-6">Reminders</h2>
      <div className="flex flex-col flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {DATA.map((item) => (
            <ReminderCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

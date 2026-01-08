export type ReminderItem = {
  id: string;
  issue: string;
  dueDate: string;
  assignee: string;
  attachment: string;
  attachmentType: "pdf" | "png";
  status?: "error" | "warning" | "success";
};

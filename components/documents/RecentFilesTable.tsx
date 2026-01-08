import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MoreVertical } from "lucide-react";

const FILES = [
  {
    type: "Policy File",
    id: "#35698",
    user: "Michael S.",
    date: "18-05-25",
    exp: "18-05-30",
    source: "Uploaded by Agent",
    status: "Valid",
  },
  {
    type: "Registration",
    id: "#35697",
    user: "Sam W.",
    date: "16-05-25",
    exp: "16-05-30",
    source: "Client",
    status: "Invalid",
  },
];

export function RecentFilesTable() {
  return (
    <div className="bg-background border rounded-lg p-4 flex-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Recent Files</h2>

        <div className="flex gap-2">
          <Button variant="secondary">Import</Button>
          <Button variant="outline">Renew</Button>
          <Button variant="outline">Complete</Button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <Input placeholder="Search..." className="max-w-xs" startIcon={<Search size={16} />} />
        <Button variant="outline">Sort by</Button>
      </div>

      <table className="w-full text-sm">
        <thead className="text-muted-foreground border-b">
          <tr>
            <th className="text-left py-2">Type</th>
            <th>File ID</th>
            <th>Uploaded by</th>
            <th>Date</th>
            <th>Expiration</th>
            <th>Source</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {FILES.map((file) => (
            <tr key={file.id} className="border-b last:border-0">
              <td className="py-3">{file.type}</td>
              <td>{file.id}</td>
              <td>{file.user}</td>
              <td>{file.date}</td>
              <td>{file.exp}</td>
              <td>{file.source}</td>
              <td>
                <Badge variant={file.status === "Valid" ? "success" : "destructive"}>
                  {file.status}
                </Badge>
              </td>
              <td>
                <MoreVertical size={16} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

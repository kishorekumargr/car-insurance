import { Folder, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

type Props = {
  name: string;
  files: number;
  size: string;
};

export function FolderCard({ name, files, size }: Props) {
  return (
    <Card className="p-4 flex justify-between items-start hover:shadow-sm transition">
      <div className="space-y-2">
        <Folder className="text-muted-foreground" />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">
            {files} files · {size}
          </p>
        </div>
      </div>
      <ArrowUpRight className="text-muted-foreground" size={16} />
    </Card>
  );
}

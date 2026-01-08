import { FolderCard } from "./FolderCard";

const FOLDERS = [
  { name: "Policies 2025", files: 45, size: "256 Mb" },
  { name: "Inspection Reports", files: 30, size: "512 Mb" },
  { name: "Claim Documentation", files: 8, size: "32 Mb" },
  { name: "Verify Required Docs", files: 12, size: "64 Mb" },
];

export function FolderGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {FOLDERS.map((folder) => (
        <FolderCard key={folder.name} {...folder} />
      ))}
    </div>
  );
}

import { DocumentComplianceCard } from "@/components/documents/DocumentComplianceCard";
import { DocumentsHeader } from "@/components/documents/DocumentsHeader";
import { FolderGrid } from "@/components/documents/FolderGrid";
import { RecentFilesTable } from "@/components/documents/RecentFilesTable";
import { StorageUsageCard } from "@/components/documents/StorageUsageCard";

export default function Documents() {
  return (
    <div className="flex gap-6 p-8">
      <div className="flex-1 space-y-6">
        <DocumentsHeader />
        <FolderGrid />
        <RecentFilesTable />
      </div>

      <div className="w-90 space-y-6">
        <DocumentComplianceCard />
        <StorageUsageCard />
      </div>
    </div>
  );
}

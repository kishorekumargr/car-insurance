import ActivePolicies from "@/components/dashboard/ActivePolicies";
import DocumentCompliance from "@/components/dashboard/DocumentCompliance";
import ExpiringSoon from "@/components/dashboard/ExpiringSoon";
import PerformanceReview from "@/components/dashboard/PerformanceReview";
import StorageUsage from "@/components/dashboard/StorageUsage";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-muted p-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <DocumentCompliance />
          <StorageUsage />
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <ActivePolicies />
            <ExpiringSoon />
          </div>
          <PerformanceReview />
        </div>
      </div>
    </main>
  );
}

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const users = [
  { name: "Olivia J.", policies: 84, renew: 3, role: "Admin" },
  { name: "Mason S.", policies: 66, renew: 5, role: "Agent" },
  { name: "Sam W.", policies: 71, renew: 7, role: "Broker" },
  { name: "Emily C.", policies: 63, renew: 2, role: "Agent" },
];

export default function PerformanceReview() {
  return (
    <Card>
      <CardHeader>
        <h3 className="font-semibold">Performance Review</h3>
      </CardHeader>

      <CardContent className="space-y-4">
        {users.map((user) => (
          <div key={user.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.policies} policies</p>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              Need Renewal
              <p className="font-medium text-foreground">{user.renew} policies</p>
            </div>

            <Button variant="outline" size="sm">
              {user.role}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

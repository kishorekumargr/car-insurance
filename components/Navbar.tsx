"use client";

import { Bell, Moon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center">
              C
            </div>
            Car Insurance
          </div>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/">
            <NavItem label="Dashboard" /*active*/ />
          </Link>
          <Link href="/documents">
            <NavItem label="Documents" />
          </Link>
          <Link href="/reminders">
            <NavItem label="Reminders" />
          </Link>
          <NavItem label="Clients" />
          <NavItem label="Agents" />
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          {/* Theme */}
          <Button variant="ghost" size="icon">
            <Moon className="h-4 w-4" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>

          {/* User */}
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatar.png" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="hidden sm:block text-sm leading-tight">
              <p className="font-medium">Amy</p>
              <p className="text-xs text-muted-foreground">Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      className={`relative px-1 py-2 text-sm transition-colors
        ${active ? "text-foreground font-medium" : "hover:text-foreground"}
      `}
    >
      {label}
      {active && (
        <span className="absolute -bottom-4.25 left-0 right-0 h-0.5 bg-primary rounded-full" />
      )}
    </button>
  );
}

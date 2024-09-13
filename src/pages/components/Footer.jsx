import React from 'react';
import { Button } from "@/components/ui/button";
import { Home, Camera, RefreshCw, ClipboardList, MoreHorizontal } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <nav className="flex justify-around p-2">
        <Button variant="ghost" className="flex flex-col items-center">
          <Home className="w-12 h-12" />
          <span className="text-xs">Home</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <Camera className="w-12 h-12" />
          <span className="text-xs">Opname</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <RefreshCw className="w-12 h-12" />
          <span className="text-xs">Update</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <ClipboardList className="w-12 h-12" />
          <span className="text-xs">Inspectie</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <MoreHorizontal className="w-12 h-12" />
          <span className="text-xs">Meer</span>
        </Button>
      </nav>
    </footer>
  );
};
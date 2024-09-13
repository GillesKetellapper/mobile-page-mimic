import React from 'react';
import { Button } from "@/components/ui/button";
import { Home, Camera, RefreshCw, ClipboardList, MoreHorizontal } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <nav className="flex justify-around items-center py-2 px-4">
        <Button variant="ghost" className="flex flex-col items-center space-y-1">
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center space-y-1">
          <Camera className="w-6 h-6" />
          <span className="text-xs">Opname</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center space-y-1">
          <RefreshCw className="w-6 h-6" />
          <span className="text-xs">Update</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center space-y-1">
          <ClipboardList className="w-6 h-6" />
          <span className="text-xs">Inspectie</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center space-y-1">
          <MoreHorizontal className="w-6 h-6" />
          <span className="text-xs">Meer</span>
        </Button>
      </nav>
    </footer>
  );
};
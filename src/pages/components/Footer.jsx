import React from 'react';
import { Button } from "@/components/ui/button";
import { Home, Camera, RefreshCw, ClipboardList, MoreHorizontal } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <nav className="flex justify-between items-center py-2 px-4">
        <Button variant="ghost" className="flex flex-col items-center space-y-1">
          <Home className="w-8 h-8 text-blue-600" />
          <span className="text-xs text-blue-600">Home</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center space-y-1">
          <Camera className="w-8 h-8 text-blue-600" />
          <span className="text-xs text-blue-600">Opname</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center space-y-1">
          <RefreshCw className="w-8 h-8 text-blue-600" />
          <span className="text-xs text-blue-600">Update</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center space-y-1">
          <ClipboardList className="w-8 h-8 text-blue-600" />
          <span className="text-xs text-blue-600">Inspectie</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center space-y-1">
          <MoreHorizontal className="w-8 h-8 text-blue-600" />
          <span className="text-xs text-blue-600">Meer</span>
        </Button>
      </nav>
    </footer>
  );
};
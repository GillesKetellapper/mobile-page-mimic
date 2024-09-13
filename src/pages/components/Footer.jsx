import React from 'react';
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <nav className="flex justify-between items-center py-2 px-4">
        <Button variant="ghost" className="flex flex-col items-center">
          <span className="text-sm text-blue-600">Home</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <span className="text-sm text-blue-600">Opname</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <span className="text-sm text-blue-600">Update</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <span className="text-sm text-blue-600">Inspectie</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <span className="text-sm text-blue-600">Meer</span>
        </Button>
      </nav>
    </footer>
  );
};
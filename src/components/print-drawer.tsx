"use client";

import { Button } from "./ui/button";
import { PrinterIcon } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./ui/drawer";

export const PrintDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="fixed bottom-4 right-4 size-16 rounded-full shadow-2xl print:hidden dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900">
          <PrinterIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Print Resume</DrawerTitle>
            <DrawerDescription>Print or save your resume as PDF.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0"></div>
          <DrawerFooter>
            <Button onClick={() => window.print()} className="dark:bg-gray-800 dark:hover:bg-gray-700">Print</Button>
            <DrawerClose asChild>
              <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function Page() {

  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="grid grid-cols-2 gap-4">
       <AlertDialog 
      open={dialogOpen}
      //  onOpenChange={(open) => console.log('Dialog open state:', open)}
       onOpenChange={(open) => setDialogOpen(open)}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={()=> console.log('cancel')}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={()=> console.log('continue')}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

      <Button onClick={() => setDialogOpen(true)} className="mt-4">
        Open Dialog manually
      </Button>
      <p className="mt-2">Dialog open state: {dialogOpen ? 'Open' : 'Closed'}</p>
    </div>
  )
}

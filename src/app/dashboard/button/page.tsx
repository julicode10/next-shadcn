"use client";
import { Button } from "@/components/ui/button"
import { ChevronRight, Loader2, MailOpen } from "lucide-react"

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button className="cursor-pointer">
        default
      </Button>
      <Button variant={"destructive"} className="cursor-pointer">
        destructive
      </Button>
      <Button variant="ghost" className="cursor-pointer">
        ghost
      </Button>
      <Button variant="link" className="cursor-pointer">
        link
      </Button>
      <Button variant="outline" className="cursor-pointer">
        outline
      </Button>
      <Button variant="secondary" className="cursor-pointer">
        secondary
      </Button>

      <Button variant="success" className="cursor-pointer">
        success
      </Button>

      <Button capitalize={true} className="cursor-pointer">
        capitalize true
      </Button>

      <Button disabled>
        disabled
      </Button>

      <Button className="cursor-pointer" onClick={() => alert("Button clicked!")}>
        click me
      </Button>

      <Button variant="outline" size="icon">
        <ChevronRight />
      </Button>

      <Button>
        <MailOpen /> Login with Email
      </Button>

      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
      
    </div>
  )
}

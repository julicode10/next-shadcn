"use client"


import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { set } from "date-fns"

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const [multiDates, setMultiDates] = useState<Date[] | undefined>([])

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex-col sm:flex-wrap sm:flex sm:flex-row  gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        disabled={ (date) => date.getDay() === 0 || date.getDay() === 6 }
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        disabled={ (date) => date > new Date()}
      />
      <Calendar
        mode="multiple"
        selected={multiDates}
        onSelect={setMultiDates}
        className="rounded-md border shadow-sm"
      />

      <div className="">
        <h1 className="text-3xl">Información</h1>
        <div className="border-b"></div>
        <p>{ smallDate }</p>
        <p>{multiDates?.map((date) => date.toLocaleDateString()).join(", ")}</p>
       
      </div>
    </div>
  )
}
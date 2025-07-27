
"use client";

import * as React from "react";
import { useModal } from "@/hooks/use-modal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { properties } from "@/lib/properties";

const BookInspectionModal = () => {
  const { isOpen, onClose } = useModal();
  const [date, setDate] = React.useState<Date>();

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-8 max-w-lg">
        <DialogHeader className="text-left">
          <DialogTitle className="text-3xl font-bold font-headline">
            BOOK A TOUR
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base font-sans">
            Schedule An Appointment With Us
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-6 mt-4">
          <Input placeholder="Full Name" className="bg-gray-100 border-none outline-none h-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="email" placeholder="Email Address" className="bg-gray-100 outline-none border-none h-12" />
            <Input type="tel" placeholder="Phone Number" className="bg-gray-100 outline-none border-none h-12" />
          </div>
          <Select>
            <SelectTrigger className="w-full bg-gray-100 border-none h-12">
              <SelectValue placeholder="Interested Property" />
            </SelectTrigger>
            <SelectContent>
              {properties.map((property) => (
                <SelectItem key={property.name} value={property.name.toLowerCase().replace(/\s+/g, '-')}>
                  {property.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal bg-gray-100 border-none h-12",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Select Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Select>
              <SelectTrigger className="w-full bg-gray-100 border-none h-12">
                <SelectValue placeholder="Select Time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-primary/90 font-headline h-12">
            SUBMIT APPOINTMENT
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookInspectionModal;

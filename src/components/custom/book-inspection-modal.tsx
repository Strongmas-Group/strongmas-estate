"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { useModal } from "@/hooks/use-modal";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { properties } from "@/lib/properties";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
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
import { Calendar } from "@/components/ui/calendar";

// ✅ Schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  property: z.string().min(1, { message: "Please select a property." }),
  date: z.date({ required_error: "A date is required." }),
  time: z.string().min(1, { message: "Please select a time." }),
});

export default function BookInspectionModal() {
  const { isOpen, onClose, type } = useModal();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const isModalOpen = isOpen && type === "bookInspection";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      property: "",
      time: "",
    },
  });

  const handleClose = () => {
    if (isSubmitting) return;
    form.reset();
    onClose();
  };

  // ✅ Updated submit handler to post to Netlify
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value instanceof Date ? format(value, "PPP") : value);
      });
      formData.append("form-name", "book-inspection");

      await fetch("/", {
        method: "POST",
        body: formData,
      });

      toast({
        title: "Tochi Request Sent!",
        description: "Thank you for your interest. We will get back to you shortly.",
      });
      form.reset();
      onClose();
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  return (
    <>
      {/* ✅ Hidden static form so Netlify detects it at build time */}
      <form name="book-inspection" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="property" />
        <input type="text" name="date" />
        <input type="text" name="time" />
      </form>

      <Dialog open={isModalOpen} onOpenChange={handleClose}>
        <DialogContent className="bg-white text-black p-8 max-w-lg">
          <DialogHeader className="text-left">
            <DialogTitle className="text-3xl font-bold font-headline">
              BOOK A TOUR
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base font-sans">
              Schedule An Appointment With Us
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              name="book-inspection"
              method="POST"
              data-netlify="true"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 mt-4"
            >
              <input type="hidden" name="form-name" value="book-inspection" />

              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Full Name"
                        {...field}
                        name="name"
                        className="bg-gray-100 border-none outline-none h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email Address"
                          {...field}
                          name="email"
                          className="bg-gray-100 outline-none border-none h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          {...field}
                          name="phone"
                          className="bg-gray-100 outline-none border-none h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Property */}
              <FormField
                control={form.control}
                name="property"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 border-none h-12">
                          <SelectValue placeholder="Interested Property" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {properties.map((property) => (
                          <SelectItem
                            key={property.name}
                            value={property.name}
                            onClick={() => form.setValue("property", property.name)}
                          >
                            {property.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="property" value={field.value} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Date + Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal bg-gray-100 border-none h-12",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? format(field.value, "PPP") : "Select Date"}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <input
                        type="hidden"
                        name="date"
                        value={field.value ? format(field.value, "PPP") : ""}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full bg-gray-100 border-none h-12">
                            <SelectValue placeholder="Select Time" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="time" value={field.value} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-white hover:bg-primary/90 font-headline h-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "SUBMIT APPOINTMENT"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}

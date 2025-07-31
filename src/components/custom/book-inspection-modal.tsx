
"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useModal } from "@/hooks/use-modal";
import { useToast } from "@/hooks/use-toast";
import { sendEmail, type SendEmailInput } from "@/ai/flows/send-email-flow";

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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { properties } from "@/lib/properties";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  property: z.string().min(1, { message: "Please select a property." }),
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
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
        setIsSubmitting(true);
      await sendEmail(values);
      toast({
        title: "Request Sent!",
        description: "Thank you for your interest. We will get back to you shortly.",
      });
      form.reset();
      onClose();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
      });
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (isSubmitting) return;
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book a Tour</DialogTitle>
          <DialogDescription>
            Fill out the form below to schedule a tour of one of our properties.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
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
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 234 567 890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
                control={form.control}
                name="property"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Property of Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a property" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {properties.map((property) => (
                                        <SelectItem key={property.name} value={property.name}>
                                            {property.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Book Tour"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

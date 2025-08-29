"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { X } from "lucide-react";

interface BookInspectionModalProps {
  onClose: () => void;
}

export default function BookInspectionModal({ onClose }: BookInspectionModalProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-4">Book an Inspection</h2>

        {/* Netlify-enabled form */}
        <form
          name="book-inspection"
          method="POST"
          data-netlify="true"
          className="space-y-4"
        >
          {/* Required hidden input for Netlify */}
          <input type="hidden" name="form-name" value="book-inspection" />

          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              className="mt-1 block w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Choose Date
            </label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            <input
              type="hidden"
              name="inspection_date"
              value={date ? format(date, "yyyy-MM-dd") : ""}
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

"use server";

/**
 * @fileOverview A flow for sending an email with tour booking details.
 *
 * - sendEmail - A function that handles the email sending process.
 * - SendEmailInput - The input type for the sendEmail function.
 */

import { ai } from "@/ai/genkit";
import { z } from "genkit";

const SendEmailInputSchema = z.object({
  name: z.string().describe("The user's full name."),
  email: z.string().email().describe("The user's email address."),
  phone: z.string().describe("The user's phone number."),
  property: z.string().describe("The property the user is interested in."),
  date: z.string().describe("The requested tour date."),
  time: z.string().describe("The requested tour time."),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

export async function sendEmail(input: SendEmailInput): Promise<void> {
  return sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: "sendEmailFlow",
    inputSchema: SendEmailInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    // This flow is no longer used by the modal, but kept for potential future use.
    console.log("Simulating email send for:", input);
  }
);

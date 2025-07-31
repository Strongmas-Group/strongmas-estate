
'use server';

/**
 * @fileOverview A flow for sending an email with tour booking details.
 *
 * - sendEmail - A function that handles the email sending process.
 * - SendEmailInput - The input type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SendEmailInputSchema = z.object({
  name: z.string().describe("The user's full name."),
  email: z.string().email().describe("The user's email address."),
  phone: z.string().describe("The user's phone number."),
  property: z.string().describe("The property the user is interested in."),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;


export async function sendEmail(input: SendEmailInput): Promise<void> {
  return sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    await ai.generate({
      prompt: `
        You are a helpful assistant. A new tour has been booked.
        Send an email to hello@strongmasng.com with the following details.
        The email subject should be: "New Property Tour Request: ${input.property}"

        Email Body:
        A new tour request has been submitted.

        Property: ${input.property}
        Name: ${input.name}
        Email: ${input.email}
        Phone: ${input.phone}

        Please follow up with them shortly.
      `,
      // This is a mock-up. In a real scenario, you'd use a tool
      // to integrate with an actual email service like SendGrid or Mailgun.
      // For this example, we are just logging the action.
    });

    console.log('Email sending process simulated for:', input);
  }
);

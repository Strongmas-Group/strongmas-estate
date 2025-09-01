export interface SendEmailInput {
  name: string;
  email: string;
  phone: string;
  property: string;
  date: string;
  time: string;
}

export async function sendEmail(data: SendEmailInput): Promise<void> {
  try {
    const response = await fetch('/api/book-inspection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to process booking');
    }

    console.log('Booking processed successfully:', result);
  } catch (error) {
    console.error('Error sending booking:', error);
    throw error;
  }
}
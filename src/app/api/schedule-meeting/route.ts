import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, idea } = body;

    // Validate required fields
    if (!name || !email || !idea) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the submission (for development)
    console.log('New booking submission:', { name, email, idea });

    // TODO: Integrate with your preferred service:
    // - Google Sheets (googleapis is already installed)
    // - Email service (SendGrid, Resend, etc.)
    // - CRM integration
    // - Database storage

    // Example: You could save to Google Sheets here
    // await saveToGoogleSheets({ name, email, idea });

    return NextResponse.json(
      { success: true, message: 'Booking information received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

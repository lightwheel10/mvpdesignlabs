import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, idea, date, time, timezone } = await req.json();

    // For now, just log the data and return success
    console.log('Meeting Request:', {
      name,
      email,
      idea,
      date,
      time,
      timezone
    });

    // Here you could send this data to your email or store in a database
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you! We will contact you shortly to confirm your consultation.'
    });

  } catch (error) {
    console.error('Error processing meeting request:', error);
    return NextResponse.json(
      { error: 'Failed to process request. Please try again.' },
      { status: 500 }
    );
  }
} 
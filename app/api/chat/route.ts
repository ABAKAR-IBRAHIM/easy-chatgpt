import { NextResponse } from 'next/server';
import axios from 'axios';
export async function POST(request: Request) {
  const res = await request.json();
  const options = {
    method: 'POST',
    url: process.env.URL,
    headers: {
      'Accept-Encoding': 'gzip',
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.X_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.X_RAPID_API_HOST
    },
    data: res
  };
  
  try {
    const response = await axios.request(options);
    
 
  return NextResponse.json(response.data.choices[0].message.content);
  } catch (error) {
    console.error(error );
    return   new Response(JSON.stringify({ error: { message: (error as Error).message} }), {
      status: 400,
    });
  }
  
 
  
}
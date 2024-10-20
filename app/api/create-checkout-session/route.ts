import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe('sk_test_51QBxHjEK4EgoSMizQNPXOMLV9trnhAUCrjmrEEhabMrNONXQYGOUgbMI4lfaslandIK3U3hDaZGQKPXkQIqWRbXS00VU3tUFIg', {
    apiVersion: '2024-09-30.acacia',
});

export async function POST(req: Request) {
    try {
        const { priceId, userId } = await req.json(); 
        if (!priceId || !userId) { 
            return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
        }
        
    } catch (error) { 

    }
}
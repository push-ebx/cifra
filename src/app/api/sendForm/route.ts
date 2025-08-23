import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const formData = await req.json();

	const response = await fetch(process.env.GOOGLE_SCRIPT_URL as string, {
		method: 'POST',
		body: JSON.stringify(formData),
		headers: { 'Content-Type': 'application/json' },
	});

	let data;
	try {
		data = await response.json();
	} catch (err) {
		const text = await response.text();
		console.warn('Не JSON от Google:', text);
		data = { raw: text };
	}

	return NextResponse.json(data);
}

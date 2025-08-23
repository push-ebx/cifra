import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const formData = await req.json();

	const response = await fetch(
		'https://script.google.com/macros/s/AKfycbxtmG4Og3XDGGIeJ-30_4WtI_NWIx7fkkWXreSM204FsZuRxtBW-JG1FBhfOUIxAOs0/exec',
		{
			method: 'POST',
			body: JSON.stringify(formData),
			headers: { 'Content-Type': 'application/json' },
		}
	);

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

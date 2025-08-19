import fs from 'fs';
import path from 'path';

import { Body, Description, Display, Heading, Image } from '@/components/ui';

const UI = () => {
	const imagesDir = path.join(process.cwd(), 'public', 'images');
	const files = fs.readdirSync(imagesDir);

	return (
		<div
			style={{
				padding: '2rem',
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
			}}
		>
			<section>
				<Display size="xl">DISPLAY XL</Display>
				<Display size="l">DISPLAY L</Display>
				<Display size="m">DISPLAY M</Display>
				<Display size="s">Display S</Display>
				<Display size="xs">DISPLAY XS</Display>
				<Display size="xxs">DISPLAY XXS</Display>
			</section>

			<section>
				<Heading color="violete" size="xl">
					Акселератор Цифра – это
				</Heading>
				<Heading size="1">heading 1</Heading>
				<Heading size="m">Heading M</Heading>
			</section>

			<section>
				<Body size="m">body m</Body>
				<Body size="l">Body L</Body>
				<Body size="s">Body s</Body>
				<Body size="s" weight="regular">
					Body s – strong
				</Body>
			</section>

			<section>
				<Description size="xl">Desc XL</Description>
				<Description size="l">Desc L</Description>
				<Description size="m">Desc M</Description>
				<Description size="s">Desc S</Description>
				<Description size="xs">Desc xs</Description>
				<Description size="xxs">Desc xxs</Description>
				<Description size="xxs" weight="regular">
					Desc xxs – strong
				</Description>
			</section>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
					gap: '1rem',
				}}
			>
				{files.map((file, index) => (
					<div
						key={index}
						style={{ position: 'relative', width: '100%', height: 200 }}
					>
						<Image
							alt={file}
							src={`/images/${file}`}
							style={{ objectFit: 'cover', borderRadius: '8px' }}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

UI.displayName = 'UI';

export default UI;

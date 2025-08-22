'use client';

import type { FC, MouseEvent, ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { CrossIcon } from '@/components/icons/cross-icon';
import { useScrollLock } from '@/hooks/client';

import styles from './modal.module.scss';

interface ModalProps {
	children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ children }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const [mounted, setMounted] = useState(false);
	const [hash, setHash] = useState(''); // <— сохраняем текущий hash один раз на клиенте

	useEffect(() => {
		setMounted(true);
		setHash(window.location.hash || '');
	}, []);

	const isOpen = searchParams.get('modal') === 'true';
	useScrollLock(isOpen);

	const buildHref = useCallback(
		(open: boolean) => {
			const params = new URLSearchParams(searchParams.toString());
			if (open) params.set('modal', 'true');
			else params.delete('modal');

			const qs = params.toString();
			return qs ? `${pathname}?${qs}${hash}` : `${pathname}${hash}`;
		},
		[hash, pathname, searchParams]
	);

	const closeModal = useCallback(() => {
		router.replace(buildHref(false), { scroll: false });
	}, [buildHref, router]);

	const onOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) closeModal();
	};

	useEffect(() => {
		if (!isOpen) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') closeModal();
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [isOpen, closeModal]);

	if (!mounted || !isOpen) return null;

	return createPortal(
		<div
			aria-label="Модальное окно"
			aria-modal="true"
			className={styles.overlay}
			onClick={onOverlayClick}
			role="dialog"
		>
			<div className={styles.content} onClick={(e) => e.stopPropagation()}>
				<CrossIcon
					className={styles.crossIcon}
					height={'1.5rem'}
					onClick={closeModal}
					width={'1.5rem'}
				/>
				{children}
			</div>
		</div>,
		document.body
	);
};

Modal.displayName = 'Modal';

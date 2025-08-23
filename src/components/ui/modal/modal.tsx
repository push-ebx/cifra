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
	const [hash, setHash] = useState('');
	const [isVisible, setIsVisible] = useState(false); // ← в дереве
	const [animateIn, setAnimateIn] = useState(false); // ← стадия анимации

	const isOpen = searchParams.get('modal') === 'true';
	useScrollLock(isOpen, 0, 'fixed');

	useEffect(() => {
		setMounted(true);
		setHash(window.location.hash || '');
	}, []);

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

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true);
			requestAnimationFrame(() => setAnimateIn(true));
		} else if (isVisible) {
			setAnimateIn(false);
			const timeout = setTimeout(() => setIsVisible(false), 250); // match transition
			return () => clearTimeout(timeout);
		}
	}, [isOpen]);

	if (!mounted || !isVisible) return null;

	return createPortal(
		<div
			aria-label="Модальное окно"
			aria-modal="true"
			className={`${styles.overlay} ${animateIn ? styles.overlayShown : ''}`}
			onClick={onOverlayClick}
			role="dialog"
		>
			<div
				className={`${styles.content} ${animateIn ? styles.contentShown : ''}`}
				onClick={(e) => e.stopPropagation()}
			>
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

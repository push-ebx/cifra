'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { useMetrica } from 'next-yandex-metrica';

import { Button, Description, Image, Input, Modal, Tab } from '@/components/ui';
import { Checkbox } from '@/components/ui/checkbox/checkbox';

import styles from './form.module.scss';

export const Form = () => {
	const [form, setForm] = useState({
		lastName: '',
		firstName: '',
		phone: '',
		telegram: '',
		school: '',
		track: 'IT',
	});

	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const [errors, setErrors] = useState<Record<string, boolean>>({});
	const [forceError, setForceError] = useState(false);

	const [checked, setChecked] = useState(false);

	const { reachGoal } = useMetrica();

	const handleChange = (field: string, value: string) => {
		if (field === 'phone') {
			// оставляем только цифры
			let digits = value.replace(/\D/g, '');

			// если начинается с 8 → заменяем на 7
			if (digits.startsWith('8')) {
				digits = '7' + digits.slice(1);
			}

			// гарантируем, что телефон всегда начинается с 7
			if (!digits.startsWith('7')) {
				digits = '7' + digits;
			}

			// ограничиваем длину (11 цифр: 7 + 10 ещё)
			digits = digits.slice(0, 11);

			// собираем итоговую строку
			value = `+${digits}`;
		}

		setForm((prev) => ({ ...prev, [field]: value }));

		if (forceError) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				if (!value.trim()) {
					newErrors[field] = true;
				} else {
					delete newErrors[field];
				}
				return newErrors;
			});
		}
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const newErrors: Record<string, boolean> = {};
		const required = ['firstName', 'phone', 'telegram', 'school'];
		required.forEach((key) => {
			if (!form[key]?.trim()) newErrors[key] = true;
		});

		if (!checked) newErrors['checked'] = true;

		setErrors(newErrors);
		setForceError(true);

		if (Object.keys(newErrors).length > 0) {
			setStatus('error');
			return;
		}

		setLoading(true);
		setStatus('idle');

		const formWithDate = {
			...form,
			submittedAt: new Date().toLocaleDateString('ru-RU'),
		};

		try {
			const res = await fetch('/api/sendForm', {
				method: 'POST',
				body: JSON.stringify(formWithDate),
				headers: { 'Content-Type': 'application/json' },
			});

			const text = await res.text();
			let data;
			try {
				data = JSON.parse(text);
			} catch {
				data = { raw: text };
			}

			if (res.ok && data.status === 'success') {
				setStatus('success');
				reachGoal('send_form');
			} else {
				setStatus('error');
			}
		} catch (err: unknown) {
			setStatus('error');
		}

		setLoading(false);
	};

	return (
		<Modal className={styles.modal}>
			{status === 'success' ? (
				<div className={styles.form}>
					<Image
						alt="maskot"
						className={styles.maskot}
						src="/images/maskot-success.webp"
					/>
					<div className={styles.text}>
						<div className={styles.textForm}>
							<Description size={'xl'}>
								Юпи! Ты уже на шаг ближе к своей мечте!
							</Description>
							<Description size={'xs'}>Скоро мы с тобой свяжемся</Description>
						</div>
					</div>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<Description className={styles.title} size={'xl'}>
						{'Регистрируйся\nчтобы участвовать'}
					</Description>

					<Description className={styles.sectionTitle} size={'l'}>
						Трек
					</Description>
					<div className={styles.tabsWrapper}>
						<div className={styles.tabsDesktop}>
							<Tab
								isActive={form.track === 'IT'}
								onClick={() => handleChange('track', 'IT')}
							>
								<Description color={'violete'} size={'xs'}>
									IT
								</Description>
							</Tab>
							<Tab
								isActive={form.track === 'Биотехнологии'}
								onClick={() => handleChange('track', 'Биотехнологии')}
							>
								<Description color={'violete'} size={'xs'}>
									Биотехнологии
								</Description>
							</Tab>
						</div>
						<div className={styles.tabsMobile}>
							<Tab
								isActive={form.track === 'IT'}
								onClick={() => handleChange('track', 'IT')}
							>
								<Description color={'violete'} size={'xxs'}>
									IT
								</Description>
							</Tab>
							<Tab
								isActive={form.track === 'Биотехнологии'}
								onClick={() => handleChange('track', 'Биотехнологии')}
							>
								<Description color={'violete'} size={'xxs'}>
									Биотехнологии
								</Description>
							</Tab>
						</div>
					</div>

					<div className={styles.inputsWrapper}>
						<Description className={styles.sectionTitle} size={'l'}>
							Контактные данные
						</Description>
						<Input
							forceError={forceError}
							isValid={!errors.firstName}
							onChange={(e) => handleChange('firstName', e.target.value)}
							placeholder={'Имя'}
							value={form.firstName}
						/>
						<div className={styles.rowInputs}>
							<Input
								forceError={forceError}
								isValid={!errors.phone}
								onChange={(e) => handleChange('phone', e.target.value)}
								placeholder={'+7 (000) 000 00 00'}
								value={form.phone}
							/>
							<Input
								forceError={forceError}
								isValid={!errors.telegram}
								onChange={(e) => handleChange('telegram', e.target.value)}
								placeholder={'Telegram'}
								value={form.telegram}
							/>
						</div>
					</div>

					<Description className={styles.sectionTitleZav} size={'l'}>
						Твое учебное заведение
					</Description>
					<Input
						className={styles.learningInput}
						forceError={forceError}
						isValid={!errors.school}
						onChange={(e) => handleChange('school', e.target.value)}
						placeholder={'Введи название'}
						value={form.school}
					/>

					<Button
						className={styles.submitBtn}
						loading={loading}
						size={'m'}
						type="submit"
						variant={'primary'}
					>
						<Description className={styles.submitText} size={'m'}>
							принять участие
						</Description>
					</Button>

					<div className={styles.checkboxWrapper}>
						<Checkbox
							checked={checked}
							forceError={forceError}
							isValid={!errors.checked}
							onClick={() => setChecked((prev) => !prev)}
						/>
						<Description color={'darkGray'} size={'xxs'}>
							Я даю согласие на обработку персональных данных в соответствии c{' '}
							<a className={styles.link} href="#">
								политикой конфиденциальности
							</a>
						</Description>
					</div>
				</form>
			)}
		</Modal>
	);
};

Form.displayName = 'Form';

// : (
// 	<div className={styles.form}>
// 		<Image
// 			alt="maskot"
// 			className={styles.maskot}
// 			src="/images/maskot-error.webp"
// 		/>
// 		<div className={styles.text}>
// 			<div className={styles.textForm}>
// 				<Description size={'xl'}>пу-пу-пуууууу</Description>
// 				<Description size={'xs'}>
// 					Люда нам **** что-то пошло не так
// 				</Description>
// 			</div>
// 		</div>
// 	</div>
// )

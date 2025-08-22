import { useCallback, useEffect, useRef, useState } from 'react';

export const useAutoControlledValue = <T>(options: {
	defaultState?: T;
	state?: T;
	initialState: T;
}) => {
	const initialState =
		typeof options.defaultState === 'undefined'
			? options.initialState
			: options.defaultState;
	const [internalState, setInternalState] = useState(initialState);

	const state = options.state ?? internalState;
	const stateRef = useRef(state);

	useEffect(() => {
		stateRef.current = state;
	}, [state]);

	const setState = useCallback((newState: T | ((prevState: T) => T)) => {
		const nextState =
			typeof newState === 'function'
				? (newState as (prevState: T) => T)(stateRef.current)
				: newState;
		stateRef.current = nextState;
		setInternalState(nextState);
	}, []);

	return [state, setState] as const;
};

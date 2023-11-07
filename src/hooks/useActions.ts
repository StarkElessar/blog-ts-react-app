import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { bindActionCreators } from 'redux';

import { actions as actionsCounter } from '../store/slices/counterSlice';
import { actions as actionsAuth } from '../store/slices/authSlice';
import { actions as actionsToken } from '../store/slices/tokenSlice';

const rootActions = {
	...actionsCounter,
	...actionsAuth,
	...actionsToken
};

export const useActions = () => {
	const dispatch = useDispatch();
	return useMemo(() => bindActionCreators(rootActions, dispatch), [ dispatch ]);
};
export const Paths = {
	home: () => '/' as const,
	login: () => '/login' as const,
	register: () => '/register' as const,
} as const;

export type PathsTypes = ReturnType<typeof Paths[keyof typeof Paths]>;

/**
	type Keys = keyof typeof Paths;
	type ValuesTypes = typeof Paths[Keys];
 */

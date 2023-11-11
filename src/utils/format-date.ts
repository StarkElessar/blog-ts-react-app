import { formatDistance, subDays } from 'date-fns';
import ru from 'date-fns/locale/ru';

export const formatDate = (date: Date): string => {
	return formatDistance(subDays(date, 0), new Date(), {
		addSuffix: true,
		includeSeconds: true,
		locale: ru
	})
};
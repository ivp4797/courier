export function isSameDay(date1, date2) {
	return (
		date1.getDate() === date2.getDate() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getFullYear() === date2.getFullYear()
	);
}

export function today() {
	return new Date();
}

export function yesterday() {
	const date = today();
	date.setDate(date.getDate() - 1);
	return date;
}

export function casedMonthName(month) {
	switch (Number(month)) {
		case 0:
			return "января";
		case 1:
			return "февраля";
		case 2:
			return "марта";
		case 3:
			return "апреля";
		case 4:
			return "мая";
		case 5:
			return "июня";
		case 6:
			return "июля";
		case 7:
			return "августа";
		case 8:
			return "сентября";
		case 9:
			return "октября";
		case 10:
			return "ноября";
		case 11:
			return "декабря";
	}
}

import { today, yesterday, isSameDay, casedMonthName } from "./datetime";

export function formatPhone(phone, countryCode = 7) {
	return `+${countryCode} ${phone.substring(0, 5)} ${phone.substring(5)}`;
}

export function padNumberWithZeros(number, minLength) {
	return String(number).padStart(minLength, "0");
}

export function formatDate(date) {
	if (isSameDay(date, today())) {
		return "Сегодня";
	}
	else if (isSameDay(date, yesterday())) {
		return "Вчера";
	}
	else {
		return `${date.getDate()} ${casedMonthName(date.getMonth())} ${date.getFullYear()}`;
	}
}

export function formatTime(date) {
	return `${padNumberWithZeros(date.getHours(), 2)}:${padNumberWithZeros(date.getMinutes(), 2)}`;
}

export function formatDateTime(date) {
	return `${formatDate(date)} ${formatTime(date)}`;
}

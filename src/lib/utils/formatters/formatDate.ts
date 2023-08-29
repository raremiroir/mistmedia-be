// Date time
export const formatDT = {
	// Get datetime id
	getId: () => {
		const now = {
			year: new Date().toLocaleDateString('nl-BE', { year: '2-digit' }),
			month: new Date().toLocaleDateString('nl-BE', { month: '2-digit' }),
			day: new Date().toLocaleDateString('nl-BE', { day: '2-digit' }),
			hour: new Date().toLocaleTimeString('nl-BE', { hour: '2-digit' }),
			minute: new Date().toLocaleTimeString('nl-BE', { minute: '2-digit' }),
			second: new Date().toLocaleTimeString('nl-BE', { second: '2-digit' }),
		}
		return `${now.year}${now.month}${now.day}${now.hour}${now.minute}${now.second}`;
	}
}
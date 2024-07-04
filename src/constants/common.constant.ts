export enum UserStatus {
	SUCCESS = 1,
	FAIL = 0,
}

export enum Image {
	MAXSIZE = 1024 * 1024 * 50,
}

export enum AcceptLanguage {
	VI = 'vi',
	JP = 'jp',
}

export enum AuthorizationType {
	Admin = 1,
	User = 2,
}

export enum Regex {
	LINK = '^(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})([\\/\\w .-]*)*(\\?[\\w%&=.-]*)?',
	PASSWORD = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,()\\][{}<>|]).{8,}$',
	EMAIL = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
	USERNAME = '^[a-z-0-9]+$',
}

export enum TypeUpdateAdmin {
	ACCOUNT = 1,
	PROFILE = 2,
}

export enum Booking {
	BOOKING_TIMES = 30,
	MINUTES_CAN_BOOKING = 15,
	MAX_HOURS_BOOKING = 540, //9 hours x 60p
}

export enum Room {
	ROOM_ONE = 1,
	ROOM_TWO = 2,
	ROOM_THREE = 3,
	ROOM_FOUR = 4,
}

export enum Time {
	SUNDAY = 0,
	SATURDAY = 6,
	START_TIME = 8,
	END_TIME = 17,
	UTC = 7,
}

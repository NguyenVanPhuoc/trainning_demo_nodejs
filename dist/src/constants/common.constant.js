"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.Time = exports.Room = exports.Booking = exports.TypeUpdateAdmin = exports.Regex = exports.AuthorizationType = exports.AcceptLanguage = exports.Image = exports.UserStatus = void 0;
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["SUCCESS"] = 1] = "SUCCESS";
    UserStatus[UserStatus["FAIL"] = 0] = "FAIL";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var Image;
(function (Image) {
    Image[Image["MAXSIZE"] = 52428800] = "MAXSIZE";
})(Image || (exports.Image = Image = {}));
var AcceptLanguage;
(function (AcceptLanguage) {
    AcceptLanguage["VI"] = "vi";
    AcceptLanguage["JP"] = "jp";
})(AcceptLanguage || (exports.AcceptLanguage = AcceptLanguage = {}));
var AuthorizationType;
(function (AuthorizationType) {
    AuthorizationType[AuthorizationType["Admin"] = 1] = "Admin";
    AuthorizationType[AuthorizationType["User"] = 2] = "User";
})(AuthorizationType || (exports.AuthorizationType = AuthorizationType = {}));
var Regex;
(function (Regex) {
    Regex["LINK"] = "^(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})([\\/\\w .-]*)*(\\?[\\w%&=.-]*)?";
    Regex["PASSWORD"] = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,()\\][{}<>|]).{8,}$";
    Regex["EMAIL"] = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
    Regex["USERNAME"] = "^[a-z-0-9]+$";
})(Regex || (exports.Regex = Regex = {}));
var TypeUpdateAdmin;
(function (TypeUpdateAdmin) {
    TypeUpdateAdmin[TypeUpdateAdmin["ACCOUNT"] = 1] = "ACCOUNT";
    TypeUpdateAdmin[TypeUpdateAdmin["PROFILE"] = 2] = "PROFILE";
})(TypeUpdateAdmin || (exports.TypeUpdateAdmin = TypeUpdateAdmin = {}));
var Booking;
(function (Booking) {
    Booking[Booking["BOOKING_TIMES"] = 30] = "BOOKING_TIMES";
    Booking[Booking["MINUTES_CAN_BOOKING"] = 15] = "MINUTES_CAN_BOOKING";
    Booking[Booking["MAX_HOURS_BOOKING"] = 540] = "MAX_HOURS_BOOKING";
})(Booking || (exports.Booking = Booking = {}));
var Room;
(function (Room) {
    Room[Room["ROOM_ONE"] = 1] = "ROOM_ONE";
    Room[Room["ROOM_TWO"] = 2] = "ROOM_TWO";
    Room[Room["ROOM_THREE"] = 3] = "ROOM_THREE";
    Room[Room["ROOM_FOUR"] = 4] = "ROOM_FOUR";
})(Room || (exports.Room = Room = {}));
var Time;
(function (Time) {
    Time[Time["SUNDAY"] = 0] = "SUNDAY";
    Time[Time["SATURDAY"] = 6] = "SATURDAY";
    Time[Time["START_TIME"] = 8] = "START_TIME";
    Time[Time["END_TIME"] = 17] = "END_TIME";
    Time[Time["UTC"] = 7] = "UTC";
})(Time || (exports.Time = Time = {}));
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["MANAGER"] = 2] = "MANAGER";
    Role[Role["DEAN"] = 3] = "DEAN";
    Role[Role["NVKP"] = 4] = "NVKP";
    Role[Role["TKVT"] = 5] = "TKVT";
    Role[Role["NVVT"] = 6] = "NVVT";
})(Role || (exports.Role = Role = {}));
//# sourceMappingURL=common.constant.js.map
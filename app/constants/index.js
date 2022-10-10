import Constants from "expo-constants";
import {Dimensions, Platform} from "react-native";
import {
	Entypo,
	FontAwesome,
	Fontisto,
	AntDesign,
	Ionicons,
	EvilIcons,
	Feather,
	FontAwesome5,
	Foundation,
	MaterialCommunityIcons,
	MaterialIcons,
	Octicons,
	SimpleLineIcons,
	Zocial,
} from "@expo/vector-icons";

///////--------  EXPORT --------------///////////////////////
export const PROVIDERS_ICONS = {
	entypo: Entypo,
	fontAwesome: FontAwesome,
	fontisto: Fontisto,
	antDesign: AntDesign,
	ionicons: Ionicons,
	evilIcons: EvilIcons,
	feather: Feather,
	fontAwesome5: FontAwesome5,
	foundation: Foundation,
	materialCommunityIcons: MaterialCommunityIcons,
	materialIcons: MaterialIcons,
	octicons: Octicons,
	simpleLineIcons: SimpleLineIcons,
	zocial: Zocial,
};

export const LOGO_APP = require("../assets/image/logo.png");
export const PLATFORM_OS = Platform.OS;
export const PLATFORM_INFO = Platform.constants;
export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;
export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;
// (?=^.{6,}$)- La stringa è > 5 caratteri
// (?=.*[0-9])- Contiene una cifra
// (?=.*[A-Z])- Contiene una lettera maiuscola
// (?=.*[a-z])- Contiene una lettera minuscola
// (?=.*[^A-Za-z0-9])- Un carattere non alfanumerico.
export const PASSWORD_REQUIRED_MSG =
	"Requires minimum: 6 characters, one digit, one uppercase letter, one lowercase letter, one special character";
export const EMAIL_REQUIRED_MSG = "Invalid email address";
export const PASSWORD_REQUIRED =
	/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/i;
export const EMAIL_REQUIRED = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const MAX_LENGTH_INPUT_USER = 80;
export const MIN_LENGTH_INPUT_USER = 3;
export const AVATAR_STUDENTS = require("../assets/image/avatars/students.png");
export const AVATAR_PARENTS = require("../assets/image/avatars/parents.png");
export const AVATAR_TEACHERS = require("../assets/image/avatars/teachers.png");
export const PHONE_REQUIRED =
	/^(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})$/i;
export const DATE_REQUIRED =
	/^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/i;
export const PHONE_MASK = "999 999 9999";
export const DATE_MASK = "99/99/9999";
export const TEACHERS_LEVELS = ["Technician", "Supervisor", "Base"];
export const GENDER_USER = ["Female", "Male", "other"];
//export const ONESIGNAL_APP_ID = "da67671f-c3de-416d-9af3-6fa01529210b";

import Constants from "expo-constants";
import { Dimensions } from "react-native";

export const LOGO_APP = require("../assets/image/logo.png");
export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;
export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;
export const PASSWORD_REQUIREDS =
  /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/i;
// (?=^.{6,}$)- La stringa è > 5 caratteri
// (?=.*[0-9])- Contiene una cifra
// (?=.*[A-Z])- Contiene una lettera maiuscola
// (?=.*[a-z])- Contiene una lettera minuscola
// (?=.*[^A-Za-z0-9])- Un carattere non alfanumerico.
export const PASSWORD_REQUIREDS_MSG =
  "Requires minimum: 6 characters, one digit, one uppercase letter, one lowercase letter, one special character";
export const MAXLENGTH_INPUT_USER = 80;
export const MINLENGTH_INPUT_USER = 3;
export const AVATAR_STUDENTS = require("../assets/image/avatars/students.png");
export const AVATAR_PARENTS = require("../assets/image/avatars/parents.png");
export const AVATAR_TEACHERS = require("../assets/image/avatars/teachers.png");

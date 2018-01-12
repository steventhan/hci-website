import {
  blueGrey800, fullWhite, darkBlack, fullBlack,
} from "material-ui/styles/colors";
import { fade } from "material-ui/utils/colorManipulator";
import spacing from "material-ui/styles/spacing";

const color = "#5cdb95";

export default {
  spacing: spacing,
  fontFamily: "Roboto Condensed, sans-serif",
  palette: {
    primary1Color: color,
    primary2Color: color,
    primary3Color: color,
    accent1Color: darkBlack,
    accent2Color: color,
    accent3Color: color,
    textColor: fullWhite,
    alternateTextColor: fullWhite,
    canvasColor: color,
    borderColor: color,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: color,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};

import IcoMoon, { IconProps } from "react-icomoon";
import iconSet from "./icons-selection.json";

export const IconWrapper = (props: IconProps) => <IcoMoon iconSet={iconSet} {...props} />;
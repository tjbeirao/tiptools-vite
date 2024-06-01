import React from 'react';
import IcoMoon, { IconProps as IcoMoonProps } from "react-icomoon";
import iconSet from "./icons-selection.json";

// Define a type for the icon names based on your actual icons in icons-selection.json
type IconName = 'home' | 'user' | 'search' | 'instagram' | 'facebook-official'; // Add all icon names here as string literals

// Extend the IconProps to include only the overrides or extensions you need
interface IconProps extends Omit<IcoMoonProps, 'icon'> {
  icon: IconName;
}

export const IconWrapper: React.FC<IconProps> = ({ icon, ...props }) => (
  <IcoMoon iconSet={iconSet} icon={icon} {...props} />
);

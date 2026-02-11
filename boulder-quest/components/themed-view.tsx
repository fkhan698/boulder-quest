import { View, type ViewProps } from 'react-native';
import { cssInterop } from 'nativewind';

import { useThemeColor } from '@/hooks/use-theme-color';

cssInterop(View, { className: 'style' });

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  className?: string;
};

export function ThemedView({ style, lightColor, darkColor, className, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} className={className} {...otherProps} />;
}

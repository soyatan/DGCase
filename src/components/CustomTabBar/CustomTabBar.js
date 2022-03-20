import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ImageLinks} from '../../Assets/Images/index';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
import {IconAlt} from './../../Assets/Svgs/iconAlt';

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.TabBarMainContainer}>
      {state.routes.map((route, index) => {
        if (route.name === 'Details') {
          return;
        } else if (route.name === 'HomePage') {
          const {options} = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = (state.index === index) | (state.index === 5);

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={isFocused ? styles.focus_button : styles.button}>
              {!isFocused ? (
                <Icon
                  name={route.name === 'Details' ? 'Home' : label}
                  scale={6}
                />
              ) : (
                <IconAlt
                  name={route.name === 'Details' ? 'Home' : label}
                  scale={6}
                />
              )}
            </TouchableOpacity>
          );
        } else {
          const {options} = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={isFocused ? styles.focus_button : styles.button}>
              {!isFocused ? (
                <Icon
                  name={route.name === 'Details' ? 'Home' : label}
                  scale={6}
                />
              ) : (
                <IconAlt
                  name={route.name === 'Details' ? 'Home' : label}
                  scale={6}
                />
              )}
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

export default CustomTabBar;

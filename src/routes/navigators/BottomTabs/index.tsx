/* eslint-disable no-underscore-dangle */
import React, { PureComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnimatedTabBar, {
  TabsConfig,
  MaterialTabBarItemConfig, MaterialTabBarIconProps,
} from '@gorhom/animated-tabbar';
import * as Screens from '../../../screens';

const Tab = createBottomTabNavigator();

const tabs: TabsConfig<MaterialTabBarItemConfig> = {
  UnitConverter: {
    icon: {
      component: ({ color, size }: MaterialTabBarIconProps) => (
        <Icon name="tape-measure" size={size} color={color} />
      ),
      color: 'rgba(255,255,255,1)',
    },
    ripple: {
      color: '#000',
    },
  },
  QRCodeReader: {
    icon: {
      component: ({ color, size }: MaterialTabBarIconProps) => (
        <Icon name="qrcode-scan" size={size} color={color} />
      ),
      color: 'rgba(255,255,255,1)',
    },
    ripple: {
      color: '#000',
    },
  },
  ContactsList: {
    icon: {
      component: ({ color, size }: MaterialTabBarIconProps) => (
        <Icon name="contacts" size={size} color={color} />
      ),
      color: 'rgba(255,255,255,1)',
    },
    ripple: {
      color: '#000',
    },
  },
  SharedNotes: {
    icon: {
      component: ({ color, size }: MaterialTabBarIconProps) => (
        <Icon name="note-multiple" size={size} color={color} />
      ),
      color: 'rgba(255,255,255,1)',
    },
    ripple: {
      color: '#000',
    },
  },
};

export default class MaterialBottomTabs extends PureComponent {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{ unmountOnBlur: true }}
        tabBar={(props) => (
          <AnimatedTabBar
            preset="material"
            animation="iconOnly"
            tabs={tabs}
            iconSize={26}
            {...props}
          />
        )}
      >
        <Tab.Screen name="UnitConverter" component={Screens.UnitConverter} />
        <Tab.Screen name="QRCodeReader" component={Screens.QRCodeReader} />
        <Tab.Screen name="ContactsList" component={Screens.ContactsList} />
        <Tab.Screen name="SharedNotes" component={Screens.SharedNotes} />
      </Tab.Navigator>
    );
  }
}

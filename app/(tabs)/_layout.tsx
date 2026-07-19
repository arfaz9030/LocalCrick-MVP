// import { Tabs } from 'expo-router';
// import { Icon } from 'react-native-paper';

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: '#020617',
//           borderTopColor: '#1F2937',
//         },
//         tabBarActiveTintColor: '#22C55E', // Safe Material green accent
//         tabBarInactiveTintColor: '#64748B',
//       }}
//     >
//       <Tabs.Screen
//         name="teams"
//         options={{
//           title: 'Teams',
//           tabBarIcon: ({ color, size }) => (
//             // Material name for team/people outlines
//             <Icon source="account-group-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Matches',
//           tabBarIcon: ({ color, size }) => (
//             // Material name for trophy outlines
//             <Icon source="trophy-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="academy"
//         options={{
//           title: 'Academy',
//           tabBarIcon: ({ color, size }) => (
//             // Material name for a school graduation cap/academy outline
//             <Icon source="school-outline" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1d978e',
        tabBarInactiveTintColor: '#757575',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="teams"
        options={{
          title: 'Teams',
          tabBarIcon: ({ color, size }) => (
            <Icon source="account-group-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Matches',
          tabBarIcon: ({ color, size }) => (
            <Icon source="trophy-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="academy"
        options={{
          title: 'Academy',
          tabBarIcon: ({ color, size }) => (
            <Icon source="school-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    height: 65,
    paddingTop: 5,
    paddingBottom: 10,
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: '700',
    marginTop: -4,
  },
});

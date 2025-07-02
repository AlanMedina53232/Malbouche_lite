import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { EventProvider } from "./context/eventContext.js"
import Login from "./login.js"
import usersScreen from "./principals/restricted/usersScreen.js"
import UserDetailScreen from "./principals/restricted/userDetailScreen.js"
import MainRest from "./principals/restricted/main.js"
import CreateUsers from "./principals/restricted/createUsers.js"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <EventProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, animation:'none' }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={MainRest} />
            <Stack.Screen name="Users" component={usersScreen} />
            <Stack.Screen name="UserDetail" component={UserDetailScreen} />
            <Stack.Screen name="CreateUsers" component={CreateUsers} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </EventProvider>
    </SafeAreaProvider>
  )
}

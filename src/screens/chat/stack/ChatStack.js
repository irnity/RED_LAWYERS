import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Chat from "../Chat"
import AdminChat from "../Components/AdminChat"

const Stack = createNativeStackNavigator()

export const UserChatStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="UserChat" component={Chat} />
    {/* <Stack.Screen name="AdminChat" component={AdminChat} /> */}
  </Stack.Navigator>
)

export const AdminChatStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AdminChat" component={AdminChat} />
    <Stack.Screen name="UserChat" component={Chat} />
  </Stack.Navigator>
)

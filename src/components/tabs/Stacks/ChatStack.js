import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Chat from "../../../screens/chat/Chat"
import AdminChat from "../../../screens/chat/Components/AdminChat"

const Stack = createNativeStackNavigator()

const ChatStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="UserChat" component={Chat} />
    <Stack.Screen name="AdminChat" component={AdminChat} />
  </Stack.Navigator>
)

export default ChatStack

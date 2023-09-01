import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Settings from "../../../screens/settings/Settings"
import SignIn from "../../../screens/settings/Components/SignIn"
import RestorePassword from "../../../screens/settings/Components/RestorePassword"

const Stack = createNativeStackNavigator()

const SettingsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LoggIn" component={Settings} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="RestorePassword" component={RestorePassword} />
  </Stack.Navigator>
)

export default SettingsStack

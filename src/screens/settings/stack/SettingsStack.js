import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useSelector } from "react-redux"
// not loged in
import LogIn from "../Components/notLogedIn/LogIn"
import SignIn from "../Components/notLogedIn/SignIn"
import RestorePassword from "../Components/notLogedIn/RestorePassword"
// loged in
import Menu from "../Components/logedIn/Menu"
import ChangeName from "../Components/logedIn/ChangeName"
import ChangeDoc from "../Components/logedIn/ChangeDoc"

const Stack = createNativeStackNavigator()

const SettingsStack = () => {
  const { isLogedIn } = useSelector((state) => state.auth)

  if (!isLogedIn) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="RestorePassword" component={RestorePassword} />
      </Stack.Navigator>
    )
  }
  if (isLogedIn) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ChangeName" component={ChangeName} />
        <Stack.Screen name="ChangeDocs" component={ChangeDoc} />
      </Stack.Navigator>
    )
  }
}

export default SettingsStack

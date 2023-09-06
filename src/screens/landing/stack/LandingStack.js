import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Certificates from "../../certificate/Certificates"
import Landing from "../Landing"

const Stack = createNativeStackNavigator()

const LandingStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Landing" component={Landing} />
  </Stack.Navigator>
)

export default LandingStack

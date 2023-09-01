import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Certificates from "../../../screens/certificate/Certificates"
import Landing from "../../../screens/landing/Landing"

const Stack = createNativeStackNavigator()

const LandingStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Landing" component={Landing} />
  </Stack.Navigator>
)

export default LandingStack

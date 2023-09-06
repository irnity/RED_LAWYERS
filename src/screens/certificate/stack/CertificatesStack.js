import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Certificates from "../Certificates"

const Stack = createNativeStackNavigator()

const CertificatesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Certificates" component={Certificates} />
  </Stack.Navigator>
)

export default CertificatesStack

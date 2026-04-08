import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native"
import { PublicStackParamsList } from ".../../../src/routes/PublicRoutes";
import { useAuthContext } from "../../context/auth.context";

export const Login = () => {
    const {user} = useAuthContext()
    console.log(user)
    const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>()
    return (
        <View className="flex-1 items-center justify-center">
            <Text> Tela de login!</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text>Registrar</Text>
            </TouchableOpacity>
        </View>
    );
};
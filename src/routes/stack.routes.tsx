import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator} = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { Response } from "../screens/Response";

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name= 'Home'
                component={Home}
            />

            <Screen
                name= 'Response'
                component={Response}
            />
        </Navigator>
    )
}
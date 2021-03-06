import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen'
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import AdjustableColors from "./src/screens/AdjustableColors";
import TextInputScreen from "./src/screens/TextInputScreen";
import PasswordInput from "./src/screens/PasswordInput";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    AdjustableColors: AdjustableColors,
    TextInput: TextInputScreen,
    Password: PasswordInput,
    BoxScreen: BoxScreen, 
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

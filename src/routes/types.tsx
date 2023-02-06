import { DrawerNavigationProp } from '@react-navigation/drawer';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PropsDrawer = {
    HomeDrawer: undefined,
    Movies: undefined
}
export type PropsStack = {
    Home: undefined,
    Movies: undefined,
    PageMovies: { data: any }
    PageSearch: undefined,
    Login: undefined
}

export type propsDrawer = DrawerNavigationProp<PropsDrawer>
export type propsStack = NativeStackNavigationProp<PropsStack>
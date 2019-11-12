import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

//Nossas paginass
import Login from './pages/Login'
import Register from './pages/Register'
import Perfil from './pages/Perfil'
import AddFriends from './pages/AddFriends'

const routes = createAppContainer(

    createSwitchNavigator({
        
     
        Perfil,
        Login,
        Register,
        AddFriends
        
    },{
        initialRouteName:'AddFriends'
    })
)

export default routes
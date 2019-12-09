import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

//Nossas paginass
import Login from './pages/Login'
import Register from './pages/Register'
import Perfil from './pages/Perfil'
import AddFriends from './pages/AddFriends'
import Conversations from './pages/Conversations'

const routes = createAppContainer(

    createSwitchNavigator({

        Conversations,
        Perfil,
        Login,
        Register,
        AddFriends

    },
        {
            initialRouteName: 'Perfil'
        })
)

export default routes
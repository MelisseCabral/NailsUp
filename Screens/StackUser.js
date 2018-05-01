import { StackNavigator} from 'react-navigation';
import LoginForm from './Login';
import SignUp from './SignUp';
import HomeUser from './HomeUser';
import PanelUser from './PanelUser';

const StackUser = StackNavigator(
  {
    HomeUser: {
      screen: HomeUser, 
      navigationOptions: ({navigation}) => ({
        title: '', 
        header: null
      })
    },   
    LoginForm: {
      screen: LoginForm,
      navigationOptions: ({navigation}) => ({
        title: '', 
        header: null
    })
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: ({navigation}) => ({
          title: '', 
          header: null
      })
    }, 
    PanelUser: {
      screen: PanelUser,
      navigationOptions: ({navigation}) => ({
        title: '', 
        header: null
    })
  },
  },
  { 
    headerMode: 'none'
  }
);
export default StackUser;
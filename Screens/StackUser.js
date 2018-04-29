import { StackNavigator} from 'react-navigation';
import LoginForm from './Login';
import SignUp from './SignUp';
import HomeUser from './SignUp';

const StackUser = StackNavigator(
  {
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
    HomeUser: {
      screen: HomeUser, 
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
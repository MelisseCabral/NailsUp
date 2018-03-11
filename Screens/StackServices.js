import { StackNavigator} from 'react-navigation';
import Services from './Services';
import ServiceByCategory from './ServiceByCategory'

const StackServices = StackNavigator(
  {
    Services: {
      screen: Services,
      navigationOptions: ({navigation}) => ({
        title: '', 
        header: null
    })
    },
    ServiceByCategory: {
      screen: ServiceByCategory, 
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
export default StackServices;
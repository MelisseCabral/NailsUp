import { StackNavigator} from 'react-navigation';
import Scheduling from './Scheduling';
import FormScheduling from './FormScheduling'

const StackScheduling = StackNavigator(
  {
    Scheduling: {
      screen: Scheduling,
      navigationOptions: ({navigation}) => ({
        title: '', 
        header: null
    })
    },
    FormScheduling: {
      screen: FormScheduling, 
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
export default StackScheduling;
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation';
import PageDailyPicture from './src/pages/PageDailyPicture';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

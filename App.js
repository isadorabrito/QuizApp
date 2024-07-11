import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';
import { PAGES } from './utils/pages';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(PAGES.HOME);
  const [userData, setUserData] = useState({});
  const [score, setScore] = useState(0);

  const navigateTo = (screen, data) => {
    setUserData({ ...userData, ...data });
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case PAGES.HOME:
        return <Home navigate={navigateTo} />;
      case PAGES.QUIZ:
        return <Quiz navigate={navigateTo} userData={userData} setScore={setScore} />;
      case PAGES.RESULT:
        return <Result navigate={navigateTo} userData={userData} score={score} />;
      default:
        return <Home navigate={navigateTo} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

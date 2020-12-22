import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  lightTheme,
  MeetingProvider,
  NotificationProvider,
  darkTheme,
  GlobalStyles
} from 'amazon-chime-sdk-component-library-react';
import { NavigationProvider } from './providers/NavigationProvider';
import {
  Meeting,
  Home,
  DeviceSetup
} from './views';
import { ThemeProvider } from 'styled-components';
import { AppStateProvider, useAppState } from './providers/AppStateProvider';
import ErrorProvider from './providers/ErrorProvider';
import Notifications from './containers/Notifications';
import meetingConfig from './meetingConfig';
import routes from './constants/routes';
import NoMeetingRedirect from './containers/NoMeetingRedirect';

function App() {
  return (
    <Router>
      <AppStateProvider>
        <Theme>
          <NotificationProvider>
            <Notifications />
            <ErrorProvider>
              <MeetingProvider {...meetingConfig}>
                <NavigationProvider>
                  <Switch>
                    <Route exact path={routes.HOME} component={Home} />
                    <Route path={routes.DEVICE}>
                      <NoMeetingRedirect>
                        <DeviceSetup />
                      </NoMeetingRedirect>
                    </Route>
                    <Route path={routes.MEETING}>
                      <NoMeetingRedirect>
                        <Meeting />
                      </NoMeetingRedirect>
                    </Route>
                  </Switch>
                </NavigationProvider>
              </MeetingProvider>
            </ErrorProvider>
          </NotificationProvider>
        </Theme>
      </AppStateProvider>
    </Router>
  );
}

const Theme = (props) => {
  const { theme } = useAppState();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
}


export default App;

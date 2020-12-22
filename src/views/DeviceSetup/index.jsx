
import React from 'react';
import { Heading } from 'amazon-chime-sdk-component-library-react';

import JoinMeetingDetails from '../../containers/MeetingJoinDetails';
import { StyledLayout } from './Styled.ts';
import DeviceSelection from '../../components/DeviceSelection';

const DeviceSetup = () => (
  <StyledLayout>
    <Heading tag="h1" level={3} css="align-self: flex-start">
      Device settings
    </Heading>
    <DeviceSelection />
    <JoinMeetingDetails />
  </StyledLayout>
);

export default DeviceSetup;

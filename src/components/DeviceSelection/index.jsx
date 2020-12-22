import React from 'react';

import {
  StyledWrapper,
  StyledAudioGroup,
  StyledVideoGroup
} from './Styled';
import MicrophoneDevices from './MicrophoneDevices';
import SpeakerDevices from './SpeakerDevices';
import CameraDevices from './CameraDevices';

const DeviceSelection = () => {
  return (
    <div>
      <StyledWrapper>
        <StyledAudioGroup>
          <MicrophoneDevices />
          <SpeakerDevices />
        </StyledAudioGroup>
        <StyledVideoGroup>
          <CameraDevices />
        </StyledVideoGroup>
      </StyledWrapper>
    </div>
  );
};


export default DeviceSelection;

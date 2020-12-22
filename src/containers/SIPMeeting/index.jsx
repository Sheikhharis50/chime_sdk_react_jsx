import React, { useState, useContext } from 'react';
import {
  Modal,
  ModalBody,
  ModalHeader,
} from 'amazon-chime-sdk-component-library-react';

import Card from '../../components/Card';
import SIPURI from '../SIPURI';
import SIPMeetingForm from '../../components/SIPMeetingForm';
import { getErrorContext } from '../../providers/ErrorProvider';
import { useSIPMeetingManager } from '../../providers/SIPMeetingProvider';

const SIPMeeting = () => {
  const [sipURI, setSipURI] = useState('');
  const [meetingId, setMeetingId] = useState('');
  const [voiceConnectorId, setVoiceConnectorId] = useState('');
  const { errorMessage, updateErrorMessage } = useContext(getErrorContext());
  const sipMeetingManager = useSIPMeetingManager();

  const handleSIPMeetingFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const sipMeetingUri = await sipMeetingManager?.getSIPURI(
        meetingId,
        voiceConnectorId
      );
      if (sipMeetingUri && typeof sipMeetingUri === 'string') {
        setSipURI(sipMeetingUri);
      } else {
        updateErrorMessage('Could not generate SIPURI');
      }
    } catch (error) {
      updateErrorMessage(error.message);
    }
  };

  const closeError = () => {
    updateErrorMessage('');
  };

  return (
    <>
      <SIPMeetingForm
        meetingId={meetingId}
        voiceConnectorId={voiceConnectorId}
        onChangeMeetingId={(e) => setMeetingId(e.target.value)}
        onChangeVoiceConnectorId={(e) =>
          setVoiceConnectorId(e.target.value)
        }
        handleSubmit={handleSIPMeetingFormSubmit}
      />
      {errorMessage && (
        <Modal size="md" onClose={closeError}>
          <ModalHeader title={`Meeting ID: ${meetingId}`} />
          <ModalBody>
            <Card
              title="Unable to find meeting"
              description="There was an issue finding that meeting. The meeting may have already ended, or your authorization may have expired."
              smallText={errorMessage}
            />
          </ModalBody>
        </Modal>
      )}
      {sipURI && <SIPURI sipURI={sipURI} />}
    </>
  );
};

export default SIPMeeting;

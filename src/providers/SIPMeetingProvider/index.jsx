import React, { useContext, useState } from 'react';

import { SIPMeetingManager } from './SIPMeetingManager';

const SIPMeetingContext = React.createContext(null);

export default function SIPMeetingProvider({ children }) {
  const [sipMeeting] = useState(new SIPMeetingManager());

  return (
    <SIPMeetingContext.Provider value={sipMeeting}>
      {children}
    </SIPMeetingContext.Provider>
  );
}

export const useSIPMeetingManager = () => {
  const sipMeetingManager = useContext(SIPMeetingContext);

  if (!sipMeetingManager) {
    throw new Error(
      'useSIPMeetingManager must be used within SIPMeetingProvider'
    );
  }

  return sipMeetingManager;
};

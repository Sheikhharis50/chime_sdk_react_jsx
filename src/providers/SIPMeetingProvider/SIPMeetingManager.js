// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { fetchMeeting } from '../../utils/api';
import { AMAZON_CHIME_VOICE_CONNECTOR_PHONE_NUMDER } from '../../constants';

export class SIPMeetingManager {

  constructor(region = 'us-east-1') {
    this.region = region;
    this.meetingData = null;
  }

  getSIPURI = async (
    meetingId,
    voiceConnectorId
  ) => {
    try {
      this.meetingData = await fetchMeeting(
        meetingId,
        AMAZON_CHIME_VOICE_CONNECTOR_PHONE_NUMDER,
        this.region
      );
      const joinToken = this.meetingData.JoinInfo.Attendee.JoinToken;
      return `sip:${AMAZON_CHIME_VOICE_CONNECTOR_PHONE_NUMDER}@${voiceConnectorId};transport=tls;X-joinToken=${joinToken}`;
    } catch (error) {
      throw new Error(error);
    }
  };
}

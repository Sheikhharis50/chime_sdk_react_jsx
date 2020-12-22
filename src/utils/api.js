import routes from '../constants/routes';
import axios from 'axios';
import uuid from 'react-uuid'

export const API_URL = 'http://127.0.0.1:8080';
export const BASE_URL = API_URL + routes.HOME;

export async function fetchMeeting(meetingId, name, region) {
    const data = await axios.post(
        `${BASE_URL}join?title=${encodeURIComponent(
            meetingId
        )}&name=${encodeURIComponent(name)}${region ? `&region=${encodeURIComponent(region)}` : ''
        }`,
    );
    // const data = await response.json();

    if (data.error) {
        throw new Error(`Server error: ${data.error}`);
    }

    return data.data.JoinInfo;
}

export function createGetAttendeeCallback(meetingId) {
    return async (chimeAttendeeId, externalUserId = uuid()) => {
        const attendeeUrl = `${BASE_URL}attendee?title=${encodeURIComponent(
            meetingId
        )}&attendee=${encodeURIComponent(chimeAttendeeId)}`;
        const data = await axios.get(attendeeUrl);
        if (data.error) {
            throw new Error('Invalid server response');
        }

        // const data = await res.json();

        return {
            name: data.data.AttendeeInfo.Name
        };
    };
}

export async function endMeeting(meetingId) {
    const res = await axios.post(
        `${BASE_URL}end?title=${encodeURIComponent(meetingId)}`,
        {}
    );

    if (!res.ok) {
        throw new Error('Server error ending meeting');
    }
}

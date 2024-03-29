import { useEffect, useState } from 'react';
import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

import { DevicePermissionStatus } from '../enums';

export default function useDevicePermissionStatus() {
  const meetingManager = useMeetingManager();
  const [permission, setPermission] = useState(
    DevicePermissionStatus.UNSET
  );

  useEffect(() => {
    const callback = (updatedPermission) => {
      setPermission(updatedPermission);
    };
    meetingManager.subscribeToDevicePermissionStatus(callback);
    return () => {
      meetingManager.unsubscribeFromDevicePermissionStatus(callback);
    };
  }, [meetingManager]);

  return permission;
}

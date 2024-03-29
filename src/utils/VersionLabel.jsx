import React from 'react';
import { Versioning } from 'amazon-chime-sdk-component-library-react';

export const VersionLabel = () => {
  const versionTag = `${Versioning.sdkName}@${Versioning.sdkVersion}`;

  return (
    <span
      style={{
        position: 'absolute',
        bottom: 1,
        right: 1,
        color: '#989da5',
        fontSize: '0.70rem'
      }}
    >
      {versionTag}
    </span>
  );
};

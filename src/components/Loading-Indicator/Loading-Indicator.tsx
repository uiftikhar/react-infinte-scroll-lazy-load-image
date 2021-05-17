import React from 'react';
import * as LoadingIndicatorStyles from './Loading-Indicator.module.scss';

export const LoadingIndicator: React.FC = () => {
  return (
    <div title="loading" className={LoadingIndicatorStyles.default.ripple}>
      <div />
      <div />
    </div>
  );
};

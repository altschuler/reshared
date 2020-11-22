import React, { ReactNode } from 'react';
import { Alert } from 'antd';

export interface ErrorDisplayProps {
    error?: string;
}

export const ErrorDisplay = (props: ErrorDisplayProps): ReactNode => {
    if (!props.error) {
        return false;
    }
    return <Alert message={props.error} type="error" />;
};

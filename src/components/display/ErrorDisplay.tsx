import React from 'react';
import { Alert } from 'antd';

export interface ErrorDisplayProps {
    error: string;
}

export const ErrorDisplay = (props: ErrorDisplayProps) => (
    <Alert message={props.error} type="error" />
);

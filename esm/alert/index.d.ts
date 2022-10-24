import React from 'react';
export interface AlertProps {
    kind?: 'info' | 'positive' | 'negative' | 'warning';
    children?: React.ReactNode;
}
export declare type KindMap = Record<Required<AlertProps>['kind'], string>;
declare const Alert: React.FC<AlertProps>;
export default Alert;

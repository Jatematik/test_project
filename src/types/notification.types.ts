import { ReactNode } from 'react';

export interface NotificationProps {
  id: string;
  avatar?: any;
  icon?: ReactNode;
  title: string;
  cash?: string;
  message: string;
  date: string;
  isRead: boolean;
}

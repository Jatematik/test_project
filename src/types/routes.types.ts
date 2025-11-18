export enum Routes {
  Main = 'Main',
  HomeMain = 'HomeMain',
  Home = 'Home',
  Payments = 'Payments',
  History = 'History',
  Analytics = 'Analytics',
  Chats = 'Chats',
  Notifications = 'Notifications',

  AllNotifications = 'AllNotifications',
  DeliveryNotifications = 'DeliveryNotifications',
  PaymentsNotifications = 'PaymentsNotifications',
  SystemNotifications = 'SystemNotifications',
  TravelNotifications = 'TravelNotifications',
}

export type RootStackParamList = {
  [Routes.Main]: undefined;
  [Routes.Home]: undefined;
  [Routes.HomeMain]: undefined;
  [Routes.Payments]: undefined;
  [Routes.History]: undefined;
  [Routes.Analytics]: undefined;
  [Routes.Chats]: undefined;
  [Routes.Notifications]: undefined;

  [Routes.AllNotifications]: undefined;
  [Routes.DeliveryNotifications]: undefined;
  [Routes.PaymentsNotifications]: undefined;
  [Routes.SystemNotifications]: undefined;
  [Routes.TravelNotifications]: undefined;
};

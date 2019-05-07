import { Subscription } from 'rxjs';

export const unsubscribeAll = (subscriptions: Subscription[]): void => {
  if (subscriptions) {
    subscriptions.forEach(subscription => subscription.unsubscribe());
  }
};

import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
import store from '../../store';
import { isLoadingPriority } from '../cart/cartSlice';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  store.dispatch(isLoadingPriority());
  const data = { priority: true };

  await updateOrder(params.orderId, data);

  store.dispatch(isLoadingPriority());

  return null;
}

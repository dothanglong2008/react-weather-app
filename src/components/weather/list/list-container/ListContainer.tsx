import { ItemTypes } from "../../../../types/weatherTypes";
import Item from "../../single-item/item/Item";

interface ListContainerProps<Item> {
  list: Array<Item>;
}
function ListContainer({ list }: ListContainerProps<ItemTypes>) {
  const itemsList = list.map((item) => <Item key={item.last_updated} />);
  return <ul>{itemsList}</ul>;
}

export default ListContainer;

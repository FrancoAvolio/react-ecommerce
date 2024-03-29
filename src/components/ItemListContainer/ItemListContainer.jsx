import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import { useProductos } from '../../hooks/useProductos';
import { Spinner } from 'react-bootstrap';
import Header from '../Header/Header';
const ItemListContainer = () => {
  const { productos, loading } = useProductos();

  return (
    <div className="item-container">
      {loading ? <Spinner/> : <ItemList items={productos} />}
    </div>
  );
};

export default ItemListContainer;

import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const check = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(checkStatus('UNDER CONSTRUCTION...'));
  };
  return (
    <div className="container p-5">
      <h4>{check}</h4>
      <button onClick={onClick} type="button" className="btn btn-primary">Check Status</button>
    </div>
  );
};

export default Categories;

import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import TableDetails from '../../features/TableDetails/TableDetails';

const TableRow = () => {

  const tables = useSelector(getAllTables);

  return (
    <>
      {tables.map(table =>
        <TableDetails
          key={table.id}
          id={table.id}
          statusId={table.status}
        />
      )}
    </>
  );
};

export default TableRow;
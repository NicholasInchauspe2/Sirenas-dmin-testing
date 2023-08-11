// import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbarUsers from './EnhancedTableToolbarUsers';
import TableContainerUsers from './TableContainerUsers';

export default function EnhancedTableUsers({array}) {
  return (
    <div>
      <EnhancedTableToolbarUsers />
      <TableContainerUsers />
    </div>
  );
}

import PropTypes from 'prop-types';
import './Table.css';

const Table = ({ netIncomes }) => {
  const IncomeTotal = netIncomes.reduce((prev, { income }) => prev + income, 0);
  const IncomeAverage = IncomeTotal / netIncomes.length;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Ingreso Neto</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map(({ brand, income }) => (
            <tr key={brand}>
              <td>{brand}</td>
              <td>${income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Promedio de ingreso neto: ${IncomeAverage.toFixed(2)}</p>
    </div>
  );
};

Table.propTypes = {
  netIncomes: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string.isRequired,
      income: PropTypes.number.isRequired,
    })
  )
};

export default Table;
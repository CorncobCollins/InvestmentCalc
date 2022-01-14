import { useContext } from "react";
import { ValueArrayContext } from "./ValueArrayContext";

function DataTable() {
  const [valueArray, ] = useContext(ValueArrayContext);
  if (valueArray !== "" && !isNaN(valueArray[1].totalAmount)) {
    return (
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <td className="no-border"></td>
              <td className="table-header">End of Year 1</td>
              <td className="table-header">End of Year 2</td>
              <td className="table-header">End of Year 3</td>
              <td className="table-header">End of Year 4</td>
              <td className="table-header">End of Year 5</td>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td className="table-info">Total Invested</td>
              <td>{valueArray[12].totalInvested}$</td>
              <td>{valueArray[24].totalInvested}$</td>
              <td>{valueArray[36].totalInvested}$</td>
              <td>{valueArray[48].totalInvested}$</td>
              <td>{valueArray[60].totalInvested}$</td>
            </tr>
            <tr>
              <td className="table-info">Total Value</td>
              <td>{valueArray[12].totalAmount}$</td>
              <td>{valueArray[24].totalAmount}$</td>
              <td>{valueArray[36].totalAmount}$</td>
              <td>{valueArray[48].totalAmount}$</td>
              <td>{valueArray[60].totalAmount}$</td>
            </tr>
            <tr>
              <td className="table-info">Total Yield</td>
              <td>{valueArray[12].totalYield}$</td>
              <td>{valueArray[24].totalYield}$</td>
              <td>{valueArray[36].totalYield}$</td>
              <td>{valueArray[48].totalYield}$</td>
              <td>{valueArray[60].totalYield}$</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else return "";
}

export default DataTable;

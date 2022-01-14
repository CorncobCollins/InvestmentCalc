import React, { useState, useContext } from "react";
import { ValueArrayContext } from "./ValueArrayContext";

let bigArr;
function InputForm() {
  const [valueArray, setValueArray] = useContext(ValueArrayContext);
  const [investinit, setInvestinit] = useState("");
  const [deposit, setDeposit] = useState("");
  const [interest, setInterest] = useState("");

  function changeInit(e) {
    const changedInit = parseInt(e.target.value)
    setInvestinit(changedInit);
    calcMoney({investinit: changedInit, deposit, interest});
  }

  function changeDeposit(e) {

     const changedDeposit = (e.target.value == "") ? (e.target.value = 0) : parseInt(e.target.value)
    setDeposit(parseInt(e.target.value));
    calcMoney({investinit, deposit: changedDeposit,interest});
  }

  function changeInterest(e) {
    const changedInterest = e.target.value < 1 ? 1 : parseFloat(e.target.value);
    setInterest(changedInterest); 
    calcMoney({ investinit, deposit, interest: changedInterest, });

  }

   function calcMoney(moneyValues) {
    bigArr = [
      { totalAmount: moneyValues.investinit, totalYield: 0, id: 0, totalMonthly: moneyValues.deposit },
    ];
    var monthlyInterest = moneyValues.interest / 1200 + 1;

    for (var i = 1; i < 61; i = i + 1) {
      var newTotal =
        moneyValues.investinit * Math.pow(monthlyInterest, i) +
        moneyValues.deposit * ((Math.pow(monthlyInterest, i) - 1) / (monthlyInterest - 1));
      var totalMonthly = moneyValues.deposit * i;
      var gain = newTotal - (moneyValues.investinit + totalMonthly);
      var totalInvested= moneyValues.investinit + totalMonthly;

      bigArr.push({
        totalAmount: parseFloat(Math.round(newTotal)).toFixed(2),
        id: i,
        totalYield: parseFloat(Math.round(gain)).toFixed(2),
        totalMonthly: totalMonthly,
        totalInvested: totalInvested,
      });
      setValueArray(bigArr);
    }
  }

  return (
    <div className="wrapper">
      <div className="form-wrap">
        <form>
          <div className="form-body">
          {((valueArray == "") || (isNaN(valueArray[1].totalAmount))) && <h2>Please input values</h2>}
            <div className="form-item">
              <label>Investment Amount $</label>
              <input
                type="number"
                onChange={changeInit}
                value={investinit}
                placeholder="Investment Amount (required)"
                min="0"
                step="100"
                required
              />
            </div>
            <div className="form-item">
              <label>Monthly investment $</label>
              <input
                type="number"
                onChange={changeDeposit}
                value={deposit}
                placeholder="Monthly Deposit (optional)"
                min="0"
                step="100"
              />
            </div>
            <div className="form-item">
              <label>Annual interest %</label>
              <input
                type="number"
                onChange={changeInterest}
                value={interest}
                placeholder="Annual interest (required)"
                min="0"
                step="0.1"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export { InputForm, bigArr };

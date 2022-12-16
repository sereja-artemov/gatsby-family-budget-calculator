import React, { useEffect, useState } from 'react';
import * as s from './JointSeparateBudget.module.scss';

function JointSeparateBudget({
  husbandIncome, setHusbandIncome, wifeIncome, setWifeIncome,
}) {
  const [totalAmount, setTotalAmount] = useState('');
  const [totalIncome, setTotalIncome] = useState(0);
  const [percentageHusband, setPercentageHusband] = useState(0);
  const [percentageWife, setPercentageWife] = useState(0);
  const [amountHusband, setAmountHusband] = useState(0);
  const [amountWife, setAmountWife] = useState(0);

  function handleHusbandIncome(event) {
    setHusbandIncome(event.target.value);
    setLocalStorageIncome('husbandIncome', event);
  }

  function handleWifeIncome(event) {
    setWifeIncome(event.target.value);
    setLocalStorageIncome('wifeIncome', event);
  }

  function handleTotalAmount(event) {
    setTotalAmount(event.target.value);
    setLocalStorageIncome('totalAmount', event);
  }

  function setLocalStorageIncome(storageName, event) {
    if (event.target.value !== '' || event.target.value !== 0) {
      localStorage.setItem(storageName, JSON.stringify(event.target.value));
    }
  }

  // Общий доход
  function calculateTotalIncome() {
    setTotalIncome(Number(husbandIncome) + Number(wifeIncome));
  }

  // Вычисление доли от общего дохода в процентах
  function calculateMembersPercentage(memberIncome) {
    const result = memberIncome / totalIncome * 100;
    return result;
  }

  // Вычисление доли от общего дохода в процентах
  function calculateMemberAmount(memberPercentage) {
    const result = totalAmount * (memberPercentage / 100);
    return Math.round(result);
  }

  useEffect(() => {
    if (localStorage.husbandIncome) {
      setHusbandIncome(JSON.parse(localStorage.husbandIncome));
    }
    if (localStorage.wifeIncome) {
      setWifeIncome(JSON.parse(localStorage.wifeIncome));
    }
    if (localStorage.totalAmount) {
      setTotalAmount(JSON.parse(localStorage.totalAmount));
    }
  }, []);

  useEffect(() => {
    calculateTotalIncome();
    setPercentageHusband(Number(calculateMembersPercentage(husbandIncome)));
    setPercentageWife(Number(calculateMembersPercentage(wifeIncome)));
  }, [husbandIncome, wifeIncome, totalIncome]);

  useEffect(() => {
    setAmountHusband(calculateMemberAmount(percentageHusband));
    setAmountWife(calculateMemberAmount(percentageWife));
  }, [totalAmount, percentageHusband, percentageWife]);

  return (
    <section className={s.root}>
      <form className={s.form} action="POST">
        <div className={s.topFieldWrapper}>
          <div className={s.fields}>
            <div className={s.fields__top}>
              <label className={`${s.fields__label} ${s.fields__labelTop}`}>
                <span> Введите доход мужа</span>
                <input className={s.fields__item} type="number" onChange={handleHusbandIncome} value={husbandIncome} placeholder="0" step="1000" min="0" max="1000000000" />
              </label>
              <label className={`${s.fields__label} ${s.fields__labelTop}`}>
                <span> Введите доход жены</span>
                <input className={s.fields__item} type="number" onChange={handleWifeIncome} value={wifeIncome} placeholder="0" step="1000" min="0" max="1000000000" />
              </label>
            </div>
            <label className={s.fields__label}>
              <span> Сумма расходов</span>
              <input className={s.fields__item} type="number" onChange={handleTotalAmount} value={totalAmount} placeholder="0" />
            </label>
          </div>
          <div className={s.fieldsIncome}>
            <p className={s.fieldsIncome__summ}>
              <span className={s.fieldsIncome__title}>Сумма доходов</span> <br/>
              {totalIncome}
            </p>
            <div className={s.fieldsIncome__columns}>
              <p>
                <span>Доля мужа</span> <br/>
                {!isNaN(percentageHusband) ? Math.round(percentageHusband) : 0}
                <span className={s.percentage}> %</span>
              </p>
              <p>
                <span>Доля жены</span> <br/>
                {!isNaN(percentageWife) ? Math.round(percentageWife) : 0}
                <span className={s.percentage}> %</span>
              </p>
            </div>
          </div>
        </div>
        <div className={s.jsBudget__resultBlock}>
            <div className={s.jsBudget__resultBlock__item}>
                <p className={s.resultTitle}>Муж платит</p>
                <span className={s.resultNumber}>{!isNaN(amountHusband) ? amountHusband : 0}</span>
            </div>
            <div className={s.jsBudget__resultBlock__item}>
                <p className={s.resultTitle}>Жена платит</p>
                <span className={s.resultNumber}>{!isNaN(amountWife) ? amountWife : 0}</span>
            </div>
        </div>
      </form>
    </section>
  );
}

export default JointSeparateBudget;

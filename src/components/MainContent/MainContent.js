import React from 'react';
import * as s from './MainContent.module.scss';
import budgetMainImg from '../../images/budget-family-img.svg';

function MainContent() {
  return (
    <section className={s.jointSeparate}>
      <h2 className={s.jointSeparate__title}>
        <b>Калькулятор</b>
        {' '}
        <br />
        {' '}
        смешанного долевого бюджета
      </h2>
      <img
        className={s.jointSeparate__mainImg}
        src={budgetMainImg}
        alt="Калькулятор смешанного долевого бюджета иллюстрация"
      />
      <div className={s.contentWrapper}>
        <div className={s.textBlock}>
          <p className={s.textBlock__paragraph}>
            Финансовый вопрос – важный аспект семейной жизни. Многие пары
            расстаются из-за разногласий в формировании
            бюджета, а ведь коммуналку проще платить вдвоем. Иначе, зачем оно всё?
          </p>
        </div>
        <div className={s.textBlock}>
          <h2 className={s.textBlock__title}>Суть</h2>
          <p className={s.textBlock__paragraph}>
            У каждого из супругов есть бюджет для себя любимого, но при
            этом есть и общий котел, который
            используют для оплаты коммуналки, отпуска, ремонта и других глобальных расходов.
          </p>
        </div>
        <div className={s.textBlock}>
          <div className={s.textBlock__note}>
            <h3>Пример</h3>
            <p className={s.textBlock__paragraph}>
              Муж зарабатывает 60 000 рублей, а жена – 30 000 рублей. Каждый ежемесячно вкладывает в
              формирование общего котла по 25% от своего дохода. Жена – 7 500 рублей, муж – 15 000 рублей.
              Итого – 22 500 рублей. Из этих средств оплачивается коммуналка, приобретаются продукты, а
              также одежда для ребенка. Остаток денег направляют на формирование финансовой подушки.
            </p>
          </div>
        </div>
        <section className={s.advantages}>
          <h2 className={s.textBlock__title}>Преимущества и недостатки смешанного бюджета</h2>
          <div className={s.textBlock}>
            <div className={s.textBlock__paragraph}>
              <h2 className={s.textBlock__subtitle}>Преимущества</h2>
              <ul className={s.advantages__list}>
                <li>✔  Формируется общий, и личный бюджет.</li>
                <li>✔  Никто не обделен и вносит равноценный вклад в семейную жизнь.</li>
                <li>✔  Благоприятный психологический климат в семье, нет взаимных упреков и недосказанности.</li>
                <li>✔  Каждый супруг имеет возможность лично использовать свои средства.</li>
              </ul>
            </div>
            <div className={s.textBlock__paragraph}>
              <h2 className={s.textBlock__subtitle}>Недостатки</h2>
              <ul className={s.advantages__list}>
                <li>✔  Явных недостатков не обнаружено.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default MainContent;

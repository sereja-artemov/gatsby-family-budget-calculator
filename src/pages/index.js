import React, { useState } from 'react';
import JointSeparateBudget from '../components/JointSeparateBudget/JointSeparateBudget';
import MainContent from '../components/MainContent/MainContent';
import '../styles/index.scss';
import '../styles/normalize.css';
import * as s from '../components/MainContent/MainContent.module.scss';
import {SEO} from "../components/Seo/Seo";
import favicon from "../images/favicon.svg";

const IndexPage = () => {
  const [husbandIncome, setHusbandIncome] = useState('');
  const [wifeIncome, setWifeIncome] = useState('');

  return (
      <main className={s.mainContent}>
        <span className={s.gradientTop}></span>
        <div className={s.container}>
          <MainContent />
          <JointSeparateBudget
              wifeIncome={wifeIncome}
              setWifeIncome={setWifeIncome}
              husbandIncome={husbandIncome}
              setHusbandIncome={setHusbandIncome}
          />
        </div>
      </main>
  );
}

export default IndexPage

export const Head = () => (<SEO>
    <link rel="icon" href={favicon} type="image/x-icon" />
</SEO>)

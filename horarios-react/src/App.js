import React from 'react';

import './global.css'

import Header from './components/Header'
import Filter from './components/Filter'
import Table from './components/Table'
import FilterDayMobile from './components_mobile/FilterDayMobile'
import FilterTurnMobile from './components_mobile/FilterTurnMobile'
import SearchMobile from './components_mobile/SearchMobile'

function App() {
  return (
    <>
      <Header />
      <Filter />
      <SearchMobile />
      <FilterDayMobile />
      <FilterTurnMobile />
      <Table />
    </>
  )
}

export default App;

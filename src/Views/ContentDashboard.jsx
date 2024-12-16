import BaseStrategy from "./Routes/BaseStrategy";
import Clients from "./Routes/Clients";
import FundsMissingTicker from "./Routes/FundsMissingTicker";
import FundStrategies from "./Routes/FundStrategies";
import List401K from "./Routes/List401K";
import ManageUsers from "./Routes/ManageUsers";
import MirrorTickers from "./Routes/MirrorTickers";
import PerClient from "./Routes/PerClient";
import PropTypes from 'prop-types';


 const ContentDashboard = ({pathname}) => {
  const ArrayViews = [
   
    {
      kind: 'header',
      title: 'Super Admin Options',
    },
    {
      segment: 'dashboard',
      title: 'Funds for Strategies',
      component: <FundStrategies/>

    },
    {
      segment: 'base_strategy',
      title: 'Base Strategy',
      component: <BaseStrategy/>

    },
    {
      segment: 'list_of_401K',
      title: 'List of 401K',
      component: <List401K/>

    },
    {
      segment: 'mirror_tickers',
      title: ' Mirror Tickers',
      component: <MirrorTickers/>

    },
    {
      segment: 'clients',
      title: ' Clients',
      component: <Clients/>

    },
    {
      segment: 'per_client',
      title: 'Per Client',
      component: <PerClient/>

    },
    {
      segment: 'funds_missing_ticker',
      title: 'Funds Missing Ticker',
      component: <FundsMissingTicker/>

    },
    {
      segment: 'manage_users',
      title: 'Manage Users',
      component: <ManageUsers/>

    },
  ];

  const filterViewToShow = () => { 
    const findedItem = ArrayViews.filter((path) => `/${path.segment}`=== pathname)
    return findedItem[0].component
   }

  return (
    <div>{filterViewToShow()}</div>
  )
}

ContentDashboard.propTypes = {
  pathname: PropTypes.string.isRequired
}

export default ContentDashboard


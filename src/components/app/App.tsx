import { Route, Routes } from 'react-router-dom';

import routesUrl from '../../utils/routes/routesUrl';

import Layout from '../layout/layout';
import Referrals from '../../pages/referrals/referrals';
import NotFound from '../../pages/not-found';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={routesUrl.referrals} element={<Referrals />} />
      </Route>
      <Route path={routesUrl.notFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';

import routesUrl from '../../utils/routes/routesUrl';

import Layout from '../layout/layout';
import Referrals from '../../pages/referrals/referrals';
import NotFound from '../../pages/not-found';
import { useEffect, useState } from 'react';

function App() {
  const [screen, setScreen] = useState<string>('full');

  let resizeDisplay = 0;

  function listenerCallback() {
    clearTimeout(resizeDisplay);
    resizeDisplay = setTimeout(resizedEnded, 500);
  }

  function resizedEnded() {
    const width = window.innerWidth;
    console.log(`width - ${width}`);

    if (width < 900) {
      setScreen('small');
    } else if (width < 1065) {
      setScreen('medium');
    } else {
      setScreen('full');
    }
  }

  useEffect(() => {
    window.addEventListener('resize', listenerCallback);
    return () => {
      window.removeEventListener('resize', listenerCallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route element={<Layout screen={screen} />}>
        <Route
          path={routesUrl.referrals}
          element={<Referrals screen={screen} />}
        />
      </Route>
      <Route path={routesUrl.notFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;

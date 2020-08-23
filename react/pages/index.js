import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Backdrop } from '@material-ui/core';

// TODO: Make this either a cooler loading animation ,or find a
//       way to quickly redirect to the [game] route/
export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  });

  return (
    <Backdrop open>
      Loading...
    </Backdrop>
  );
}

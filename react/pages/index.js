import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Backdrop } from '@material-ui/core';

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

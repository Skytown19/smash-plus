import React, { useEffect } from 'react';
// import { useRouter } from 'next/router';

import { Backdrop } from '@material-ui/core';
import Drawer from '../components/drawer';

export default function Index() {
  // const router = useRouter();

  // useEffect(() => {
  //   // console.log('use effect');
  //   // router.push('/home');
  // });

  return (
    // <Backdrop open>
    //   Loading...
    // </Backdrop>
    <Drawer />
  );
}

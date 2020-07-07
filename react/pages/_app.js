import '../css/index.css';
import NoSsr from '@material-ui/core/NoSsr';

function SmashPlus({ Component, pageProps }) {
  return (
    <NoSsr>
      <Component {...pageProps} />
    </NoSsr>
  );
}

export default SmashPlus;

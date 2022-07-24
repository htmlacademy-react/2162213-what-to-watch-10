import {Link} from 'react-router-dom';

function ErrorNotFound(): JSX.Element {
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ color: '#7750e5', fontSize: 140, fontWeight: 'bold' }}>404</p>
      <h3 style={{ fontStyle: 'italic' }}>Ooops..</h3>
      <h3 style={{ fontStyle: 'italic' }}>page not found</h3>
      <Link to='/'>go home</Link>
    </div>
  );
}

export default ErrorNotFound;

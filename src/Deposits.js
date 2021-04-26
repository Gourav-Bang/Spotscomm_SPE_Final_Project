import * as React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Orders from './Orders';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>No. of Students</Title>
      <Typography component="p" variant="h4">
        79
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={Orders}>
          View
        </Link>
      </div>
    </React.Fragment>
  );
}

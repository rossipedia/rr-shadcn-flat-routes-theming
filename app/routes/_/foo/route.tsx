import { Link } from 'react-router';
import { Button } from '~/components/ui/button';

export default function Foo() {
  return (
    <Button variant="secondary" asChild>
      <Link to="/">Go to /</Link>
    </Button>
  );
}

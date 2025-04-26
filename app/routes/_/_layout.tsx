import { Outlet } from 'react-router';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

export default function Layout() {
  return (
    <Card className="max-w-sm mx-auto container my-8">
      <CardHeader>
        <CardTitle>Hello RR + ShadCN</CardTitle>
        <CardDescription>Basic Starter</CardDescription>
      </CardHeader>
      <CardContent>
        <Outlet />
      </CardContent>
      <CardFooter>
        <p>👋</p>
      </CardFooter>
    </Card>
  );
}

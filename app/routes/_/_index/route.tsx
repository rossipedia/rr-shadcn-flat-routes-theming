import { Link, useRevalidator } from 'react-router';
import { Button } from '~/components/ui/button';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { ColorSchema, useColorScheme } from '~/lib/theming';

export default function Index() {
  const [color, setColor] = useColorScheme();
  const { revalidate } = useRevalidator();

  return (
    <div className="flex flex-col gap-4">
      <p>Do cool stuff!</p>
      <div className="flex flex-col gap-2">
        Set the theme:
        <RadioGroup
          defaultValue="system"
          className="gap-1"
          value={color}
          onValueChange={(value) => {
            setColor(ColorSchema.parse(value));
          }}
        >
          <div className="flex flex-row gap-2 items-center">
            <RadioGroupItem value="system" id="system" />
            <label htmlFor="system">System</label>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <RadioGroupItem value="light" id="light" />
            <label htmlFor="light">Light</label>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <RadioGroupItem value="dark" id="dark" />
            <label htmlFor="dark">Dark</label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <Button
          onClick={() => {
            revalidate();
          }}
          variant="outline"
        >
          Revalidate
        </Button>
      </div>
      <div>
        <Button variant="secondary" asChild>
          <Link to="/foo">Go to /foo</Link>
        </Button>
      </div>
    </div>
  );
}

import * as cookie from 'cookie';
import { useCallback, useEffect, useState } from 'react';
import { useRouteLoaderData } from 'react-router';
import { z } from 'zod';
import type { Info } from '../+types/root';

export const ColorSchema = z.enum(['light', 'dark', 'system']).catch('system');

type ColorScheme = z.infer<typeof ColorSchema>;

const CookieSchema = z.object({
  color: ColorSchema.optional(),
});

export function readFromCookie(cookieValue: string) {
  const { color = 'system' } = CookieSchema.catch({}).parse(
    cookie.parse(cookieValue)
  );

  return color;
}

function writeToCookie(value: ColorScheme) {
  document.cookie = cookie.serialize('color', value, {
    maxAge: value === 'system' ? -1 : 60 * 60 * 24 * 30,
  });
}

function useColorSchemeFromServer() {
  return (
    useRouteLoaderData<Info['loaderData']>('root')?.colorFromServer ?? 'system'
  );
}

export function useColorScheme() {
  const [color, setColor] = useState(useColorSchemeFromServer());

  const setColorScheme = useCallback(
    (value: ColorScheme) => {
      setColor(value);
      document.documentElement.classList.remove('dark', 'light', 'system');
      document.documentElement.classList.add(value);
      writeToCookie(value);
    },
    [setColor]
  );

  return [color, setColorScheme] as const;
}

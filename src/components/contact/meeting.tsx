import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
export default function Meeting() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <Button
      data-cal-namespace=''
      data-cal-link='nitan-jana/15min'
      data-cal-config='{"layout":"month_view"}'
      variant='outline'
    >
      Book a call
    </Button>
  );
}

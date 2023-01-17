import * as React from 'react';

export default function useRenderCount() {
  const count = React.useRef(1);
  React.useEffect(() => {
    count.current += 1;
  });
  return count.current;
}

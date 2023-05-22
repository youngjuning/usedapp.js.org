import React, { useEffect } from 'react';

const Adsense: React.FC<any> = (props) => {
  useEffect(() => {
    // @ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  return (
    <ins {...props} />
  );
}

export default Adsense

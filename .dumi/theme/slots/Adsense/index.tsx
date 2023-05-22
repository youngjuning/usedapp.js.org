import React, { useEffect } from 'react';

const Adsense: React.FC = () => {
  useEffect(() => {
    // @ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7029815294762181"
      data-ad-slot="2148104191"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

export default Adsense

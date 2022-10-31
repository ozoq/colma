import { withEmotionCache } from "@emotion/react";
import { useContext, useEffect } from "react";
import { ClientStyleContext, ServerStyleContext } from "./context";

const ChakraStyles = withEmotionCache((props, emotionCache) => {
  const serverStyleData = useContext(ServerStyleContext);
  const clientStyleData = useContext(ClientStyleContext);

  useEffect(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      (emotionCache.sheet as any)._insertTag(tag);
    });
    clientStyleData?.reset();
  }, []);

  return (
    <>
      {serverStyleData?.map(({ key, ids, css }) => (
        <style
          key={key}
          data-emotion={`${key} ${ids.join(" ")}`}
          dangerouslySetInnerHTML={{ __html: css }}
        />
      ))}
    </>
  );
});

export default ChakraStyles;

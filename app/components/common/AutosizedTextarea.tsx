import type { TextareaProps } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import autosize from "autosize";
import { useEffect, useRef } from "react";

export type AutosizedTextareaProps = TextareaProps;

export default function AutosizedTextarea(props: AutosizedTextareaProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    autosize(ref.current);
    const autosized = ref.current;
    return () => {
      autosize.destroy(autosized);
    };
  }, []);

  return <Textarea ref={ref} {...props} />;
}

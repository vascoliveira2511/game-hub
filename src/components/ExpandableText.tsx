// ExpandableText.tsx
import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
  maxLength?: number;
}

const ExpandableText = ({ text, maxLength = 300 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  const displayText = isExpanded
    ? text
    : text.slice(0, maxLength) + (text.length > maxLength ? "..." : "");

  return (
    <Text>
      {displayText}
      {text.length > maxLength && (
        <Button
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          variant="link"
          colorScheme="teal"
          marginLeft={2}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </Button>
      )}
    </Text>
  );
};

export default ExpandableText;

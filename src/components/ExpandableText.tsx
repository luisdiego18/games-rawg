import { Button, Text } from "@chakra-ui/react";
import  {  useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const limit = 300;

  const handleExpanded = () => {
    setExpanded(!isExpanded);
  };

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = isExpanded ? children : children.substring(0, limit) + "...";

  return (
    <>
      <Text>
        {summary}
        <Button
          size={"xs"}
          marginLeft={1}
          fontWeight={"bold"}
          colorScheme="yellow"
          onClick={handleExpanded}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;

import { useState } from "react";
import { HStack, IconButton } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ max = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    if (onRatingChange) {
      onRatingChange(rate);
    }
  };

  return (
    <HStack spacing={1}>
      {Array.from({ length: max }, (_, index) => (
        <IconButton
          key={index}
          icon={<FaStar />}
          color={index < rating ? "yellow.400" : "gray.300"}
          onClick={() => handleRating(index + 1)}
          variant="ghost"
          aria-label={`Rate ${index + 1} stars`}
        />
      ))}
    </HStack>
  );
};

export default StarRating;
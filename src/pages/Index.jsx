import { Container, Text, VStack } from "@chakra-ui/react";
import StarRating from "../components/StarRating";

const Index = () => {
  const handleRatingChange = (rating) => {
    console.log(`Rated: ${rating} stars`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Rate Your Favorite Movie</Text>
        <StarRating onRatingChange={handleRatingChange} />
      </VStack>
    </Container>
  );
};

export default Index;
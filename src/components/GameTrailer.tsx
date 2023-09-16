import React from "react";
import useTrailer from "../hooks/useTrailers";
import { Spinner, Text } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);
  const first = data?.results[0];

  if (isLoading) return null;
  if (error) throw error;

  return first ? (
    <video src={first.data[480]} poster={first?.preview} controls />
  ) : null;
};

export default GameTrailer;

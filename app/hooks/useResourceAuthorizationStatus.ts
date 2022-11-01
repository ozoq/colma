import useGlobalContext from "./useGlobalContext";

export default function useResourceAuthorizationStatus(ownerId: number) {
  const { currentUserId } = useGlobalContext();
  return {
    isOwned: currentUserId === ownerId,
  };
}

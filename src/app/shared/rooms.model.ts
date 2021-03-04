export interface Rooms {
  id: number;
  uniqueId: string;
  leaderboardRank: number;
  leaderboardValue: string;
  name: string;
  description: string;
  ownerName: string;
  ownerUniqueId: string;
  thumbnailUrl: string;
  imageUrl: string;
  rating: number;
  publicRoom: boolean;
  doorMode: string;
  tags: string[];
}

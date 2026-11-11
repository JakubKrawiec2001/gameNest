const IGDB_IMAGE_URL = "https://images.igdb.com/igdb/image/upload";

type IgdbImageSize =
  | "cover_small"
  | "cover_big"
  | "screenshot_med"
  | "screenshot_big"
  | "screenshot_huge"
  | "logo_med"
  | "thumb"
  | "micro"
  | "720p"
  | "1080p";

export const getIgdbImageUrl = (imageId: string, size: IgdbImageSize) =>
  `${IGDB_IMAGE_URL}/t_${size}/${imageId}.jpg`;

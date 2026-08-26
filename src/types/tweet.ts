interface TweetUser {
  name: string;
  screen_name: string;
  profile_image_shape: string;
  id: string;
  is_blue_verified: boolean;
  verified: boolean;
  verified_type: 'Business' | 'Government';
  profile_image_url_https: string;
}

interface TweetPhoto {
  backgroundColor?: {
    red: number;
    green: number;
    blue: number;
  };
  crop?: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  expandedUrl: string;
  url: string;
  width: number;
  height: number;
}

interface TweetVideoVariant {
  type: string;
  src: string;
}

interface TweetVideo {
  aspectRatio: [number, number];
  contentType: string;
  durationMs?: number;
  poster: string;
  variants: TweetVideoVariant[];
}

export interface Tweet {
  id_str: string;
  text: string;
  in_reply_to_screen_name?: string;
  favorite_count: number;
  created_at: string;
  entities: [];
  user: TweetUser;
  photos?: TweetPhoto[];
  video?: TweetVideo;
  conversation_count: number;
  news_action_type: string;
  quoted_tweet?: Tweet;
  parent?: Tweet;
}

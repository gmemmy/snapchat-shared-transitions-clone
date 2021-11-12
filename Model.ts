export type SnapchatRoutes = {
  Snapchat: undefined;
  Story: { story: any };
};

export interface Story {
  id: string;
  source: number;
  user: string;
  avatar: number;
  video?: number;
}

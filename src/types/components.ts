export type TStoryMain = {
  id: string;
  previewImage: string;
  stories: TStory[];
};

export type TStory = {
  id: number;
  image: string | null;
  video: string | null;
};

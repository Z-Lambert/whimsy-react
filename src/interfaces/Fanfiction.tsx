export default interface IFanFiction {
  url: string;
  title: string;
  author: string;
  summary: string;
  fandoms: string;
  characters: string[];
  genres: string[];
  wordCount: number;
  completed: boolean;
  published?: Date;
  updated?: Date;
  review?: string;
  recommended?: boolean;
  ratingCharacters?: number;
  ratingPlot?: number;
  ratingGrammar?: number;
  chapterCount: number;
  notes?: string[];
  status: string;
  tags?: string[];
}
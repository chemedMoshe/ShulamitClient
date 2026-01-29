export interface DataGraph {
  _id?: string;
  userId?: string;
  emotionScore: number;
  desireToStay_score: number;
  tensionLevel: number;
  entryOrder: number;
  entryTime: Date;
}

export type DataGraphKey = keyof DataGraph;
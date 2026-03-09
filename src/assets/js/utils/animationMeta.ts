import type { AnimationTag } from './animationTagMaster';

export type AnimationEngine = 'css' | 'gsap' | 'svg' | 'webgl' | (string & {});
export type AnimationDifficulty =
  | 'basic'
  | 'intermediate'
  | 'advanced'
  | (string & {});

export type AnimationSnippet = {
  html: string;
  css: string;
  js: string;
};

export type AnimationMeta = {
  slug: string;
  title: string;
  description: string;
  order?: number;
  tags: {
    primary: AnimationTag[];
    free?: string[];
  };
  keywords?: string[];
  engine?: AnimationEngine[];
  difficulty?: AnimationDifficulty;
  updatedAt?: `${number}-${number}-${number}`;
  snippet?: Partial<AnimationSnippet>;
};

export function defineAnimationMeta(meta: AnimationMeta): AnimationMeta {
  return meta;
}


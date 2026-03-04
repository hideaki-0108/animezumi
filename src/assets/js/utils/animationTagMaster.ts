/**
 * # アニメーションタグのマスタ
 * アニメーションの種別を管理するためのマスタークラスです
 *
 * @example
 * const tag = animationTagMaster.CSS;
 * console.log(tag.label); // 'CSS'
 *
 * @example
 * const animationItem = {
 *   title: 'Pulse Animation',
 *   link: 'pulse',
 *   component: 'PulsePreview',
 *   description: '鼓動のようなリズミカルなアニメーション',
 *   tags: [animationTagMaster.CSS, animationTagMaster.KEYFRAME, animationTagMaster.SCALE],
 * }
 * console.log(animationItem.tags); // [animationTagMaster.CSS, animationTagMaster.KEYFRAME, animationTagMaster.SCALE]
 */
export const animationTagMaster = {
  CSS: { label: 'CSS' },
  KEYFRAME: { label: 'KEYFRAME' },
  SCALE: { label: 'SCALE' },
  TRANSFORM: { label: 'TRANSFORM' },
  TRANSITION: { label: 'TRANSITION' },
  ANIMATION: { label: 'ANIMATION' },
  GSAP: { label: 'GSAP' },
} as const;

export type AnimationTag = keyof typeof animationTagMaster;

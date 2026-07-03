declare module '*.svg' {
  interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
    blurWidth?: number;
    blurHeight?: number;
  }
  const content: StaticImageData | string;
  export default content;
}

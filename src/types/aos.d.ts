declare module 'aos' {
  const AOS: {
    init: (options?: {
      duration?: number;
      easing?: string;
      once?: boolean;
    }) => void;
  };
  export default AOS;
} 
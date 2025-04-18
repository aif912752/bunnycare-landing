declare module 'aos' {
    interface AosOptions {
      offset?: number;
      delay?: number;
      duration?: number | string;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
      disable?: boolean | string | Function;
      startEvent?: string;
      animatedClassName?: string;
      initClassName?: string;
      useClassNames?: boolean;
      disableMutationObserver?: boolean;
    }
  
    function init(options?: AosOptions): void;
    function refresh(hard?: boolean): void;
    function refreshHard(): void;
  
    const aos: {
      init: typeof init;
      refresh: typeof refresh;
      refreshHard: typeof refreshHard;
    };
  
    export default aos;
  }
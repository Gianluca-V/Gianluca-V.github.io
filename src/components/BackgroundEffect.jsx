import { useRef, useEffect } from "preact/hooks";

export function BackgroundEffect() {
    let backgroundEffectRef = useRef(null);
    let mouseX = 0;
    let mouseY = 0;

    const followMouse = () => {
        backgroundEffectRef.current.style.top = mouseY + "px";
        backgroundEffectRef.current.style.left = mouseX + "px ";
    };

    const updateMousePosition = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (backgroundEffectRef.current.style.opacity != "1") backgroundEffectRef.current.style.opacity = "1";
    };

    const initialize = () => {
        backgroundEffectRef.current.style.opacity = "0";
    }

    useEffect(() => {
        initialize();
        document.addEventListener("mousemove", updateMousePosition);
        document.addEventListener("mousemove", followMouse);

    }, []);

    return (
        <div
            ref={backgroundEffectRef}
            id="backgroundEffect"
            class="overflow-hidden"
        >
            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" class="max-h-fit">
                <defs>
                    <pattern
                        id="b"
                        patternUnits="userSpaceOnUse"
                        width="25"
                        height="25"
                        viewBox="0 0 100 100"
                        fill="#2a2a2a"
                    >
                        <circle cx="25" cy="25" r="8.333" />
                        <circle cx="75" cy="75" r="8.333" />
                    </pattern>
                </defs>
                <path fill="url(#b)"> 
                    <animate attributeName="d" repeatCount="indefinite" dur="10s"
                        values="M830 634.5q-9 134.5-130 223T419.5 931Q260 916 155 790t-52.5-270.5q52.5-144.5 143-224t202-103.5q111.5-24 232 16t140 166Q839 500 830 634.5Z;
                        M887 652.5Q863 805 722 882t-289 33.5Q285 872 235.5 743t-99-261Q87 350 194 253t240-115q133-18 260 37t172 190q45 135 21 287.5Z;
                        M867 610Q762 720 658 762t-215.5 36.5Q331 793 268 700T127 471.5Q49 336 189.5 271t254-80q113.5-15 210 42T861 395q111 105 6 215Z;
                        M925.5 654.5Q868 809 717 840.5t-281.5 14Q305 837 184 748t-67.5-228.5q53.5-139.5 109-269t205-166Q580 48 703 137.5t201.5 226q78.5 136.5 21 291Z;
                        M813.5 636Q824 772 703 869t-244 6.5Q336 785 265.5 698t-88-204.5Q160 376 246.5 294T459 116q126-96 211.5 36.5t109 240Q803 500 813.5 636Z;
                        M830 634.5q-9 134.5-130 223T419.5 931Q260 916 155 790t-52.5-270.5q52.5-144.5 143-224t202-103.5q111.5-24 232 16t140 166Q839 500 830 634.5Z;
                        "
                    ></animate> 
                </path>
            </svg>
        </div>
    );
}

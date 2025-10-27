import * as React from "react";
import { createPortal } from "react-dom";

interface ShadowContainerProps {
    children: React.ReactNode;
    styles: string;
    className?: string;
}

export const ShadowDomContainer: React.FC<ShadowContainerProps> = ({ children, styles, className = "" }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const shadowRootRef = React.useRef<ShadowRoot | null>(null);
    const [isReady, setIsReady] = React.useState(false);

    React.useLayoutEffect(() => {
        if (!containerRef.current || shadowRootRef.current) {
            return;
        }

        shadowRootRef.current = containerRef.current.attachShadow({ mode: "open" });

        const styleElement = document.createElement("style");
        styleElement.textContent = styles;
        shadowRootRef.current.appendChild(styleElement);

        const contentContainer = document.createElement("div");
        contentContainer.id = "root";
        shadowRootRef.current.appendChild(contentContainer);

        setIsReady(true);
    }, [styles]);

    return (
        <div ref={containerRef} className={className} data-shadcn-container>
            {isReady && shadowRootRef.current && createPortal(children, shadowRootRef.current.getElementById("root")!)}
        </div>
    );
};
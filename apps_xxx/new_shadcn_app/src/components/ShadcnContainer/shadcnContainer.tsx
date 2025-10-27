import type * as React from "react";
import shadcnStyles from "../../styles/globals.css?inline";
import {ShadowDomContainer} from "@easybill/shadowdom";

interface ShadcnContainerProps {
    children: React.ReactNode;
    useShadowDom?: boolean;
    className?: string;
}

export default function ShadcnContainer({ children, useShadowDom = true, className = "" } : ShadcnContainerProps) {
    if (!useShadowDom) {
        return <div className={`shadcn-container ${className}`}>{children}</div>;
    }

    return (
        <ShadowDomContainer styles={shadcnStyles} className={className}>
            {children}
        </ShadowDomContainer>
    );
};

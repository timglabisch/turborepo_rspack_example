import * as React from "react";
import shadcnStyles from "../../styles/globals.css?inline";
import {ShadowDomContainer} from "@easybill/shadowdom";

interface ShadcnContainerProps {
    children: React.ReactNode;
    useShadowDom?: boolean;
    className?: string;
}

const ShadcnContainerContext = React.createContext<boolean>(false);

export function useIsInsideShadcnContainer(): boolean {
    return React.useContext(ShadcnContainerContext);
}

function ShadcnShadowDomContainer({ children, useShadowDom = true, className = "" } : ShadcnContainerProps) {
    if (!useShadowDom) {
        return (
            <ShadcnContainerContext.Provider value={true}>
                <div className={`shadcn-container ${className}`}>{children}</div>
            </ShadcnContainerContext.Provider>
        );
    }

    return (
        <ShadcnContainerContext.Provider value={true}>
            <ShadowDomContainer styles={shadcnStyles} className={className}>
                {children}
            </ShadowDomContainer>
        </ShadcnContainerContext.Provider>
    );
}

interface ShadcnMaybeContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function ShadcnContainer({ children, className = "" }: ShadcnMaybeContainerProps) {
    const isInsideShadcnContainer = useIsInsideShadcnContainer();

    if (isInsideShadcnContainer) {
        return <>{children}</>;
    }

    return (
        <ShadcnShadowDomContainer className={className}>
            {children}
        </ShadcnShadowDomContainer>
    );
}

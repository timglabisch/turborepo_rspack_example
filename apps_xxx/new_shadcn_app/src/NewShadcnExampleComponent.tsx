import React from 'react';
import {ShadcnContainer} from "@/components/ShadcnContainer/shadcnContainer";
import {Button} from "@/components/ui/button";

export default function NewShadcnExampleComponent() {
    return (
        <ShadcnContainer>
            <div>
                <Button>Hello From Module Federation!</Button>
            </div>
        </ShadcnContainer>
    )
}
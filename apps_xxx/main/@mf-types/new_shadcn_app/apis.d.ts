
    export type RemoteKeys = 'new_shadcn_app/NewShadcnExampleComponent';
    type PackageType<T> = T extends 'new_shadcn_app/NewShadcnExampleComponent' ? typeof import('new_shadcn_app/NewShadcnExampleComponent') :any;
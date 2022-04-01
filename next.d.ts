// next.d.ts

import type {
    NextComponentType,
    NextPageContext,
    NextLayoutComponentType,
} from 'next';
import type { AppProps } from 'next/app';

declare module 'next' {
    type NextPage<P = {}> = NextComponentType<
        NextPageContext,
        any,
        P
    > & {
        getLayout?: (page: ReactNode) => ReactNode;
    };
}

declare module 'next/app' {
    type AppLayoutProps<P = {}> = AppProps & {
        Component: NextLayoutComponentType;
    };
}
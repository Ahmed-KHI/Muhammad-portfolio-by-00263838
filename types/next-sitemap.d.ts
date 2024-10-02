declare module 'next-sitemap' {
    export interface IConfig {
        siteUrl: string;
        generateRobotsTxt?: boolean;
        // Add any other relevant options from the next-sitemap config
    }

    export default function sitemap(config: IConfig): void;
}

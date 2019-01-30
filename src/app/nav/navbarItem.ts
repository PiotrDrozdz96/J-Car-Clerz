export interface NavbarItem {
    title: string;
    href?: string;
    dropdown?: Array<NavbarItem>;
}

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface SidebarMenuItemModel {
    name: string;
    level_1: ItemMenuLevel_1[];
}

export interface ItemMenuLevel_1 {
    name: string;
    link?: ItemMenuLink;
    icon?: ItemMenuIcon;
    ui?: ItemMenuUi;
    level_2?: {
        toggle: ItemMenuToggle,
        items: ItemMenuLevel_2[]
    };
}

export interface ItemMenuLevel_2 {
    name: string;
    link?: ItemMenuLink;
    icon?: ItemMenuIcon;
    ui?: ItemMenuUi;
    level_3?: {
        toggle: ItemMenuToggle,
        items: ItemMenuLevel_3[]
    };
}

export interface ItemMenuLevel_3 {
    name: string;
    link?: ItemMenuLink;
    icon?: ItemMenuIcon;
    ui?: ItemMenuUi;
}

export interface ItemMenuToggle {
    name: string;
    dataparent: string;
    value: boolean
}

export interface ItemMenuLink {
    name: string;
    route: string;
    router: string[]
}

export interface ItemMenuIcon {
    name: string;
    icon: IconDefinition
}

export interface ItemMenuUi {
    title: string;
    description: 'string'
    breadcrumbs: ItemMenuBreadcrumbs[];
}

export interface ItemMenuBreadcrumbs {
    title: string;
    router?: string[];
}
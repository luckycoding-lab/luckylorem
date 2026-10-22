export type CategoryId = "Tech" | "Cars" | "Ai" | "Random";

export interface CategoryItem {
    id: CategoryId,
    icon: string,
    label: string,
}
export type LinkObj = {
  to: string;
  name: string;
};

export interface MobileNavCategoryProps {
  name: string;
  links: LinkObj[];
}

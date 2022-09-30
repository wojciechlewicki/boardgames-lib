export type LinkObj = {
  name: string;
  to: string;
};

export interface MobileNavCategoryProps {
  name: string;
  links: LinkObj[];
  isOpen: boolean,
  setShow: React.Dispatch<React.SetStateAction<String | null>>
}

export interface MobileNavCategories {
  name: string;
  links: LinkObj[];
}
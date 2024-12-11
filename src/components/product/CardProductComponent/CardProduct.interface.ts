import { VariantsProduct } from "../../../interfaces";

export interface CardProductProps {
  image: string;
  name: string;
  price: number;
  slug: string;
  colors: {name: string; color: string}[];
  variants: VariantsProduct[];
}
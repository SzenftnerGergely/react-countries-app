import { SetStateAction } from "react";

export type CountryProps = {
  country: {
    flags: {
      svg: string;
    };
    name: {
      common: string;
    };
    population: number;
    region: string;
    capital: string;
  };
};

export type OptionProps = {
  id: number;
  name: string;
  title: string;
};

export type CustomFilterProps = {
  setValue: React.Dispatch<SetStateAction<string>>
  setKey: React.Dispatch<SetStateAction<string>>
  options: OptionProps[];
};

export type FilterProps = {
  region: string;
};

export type HomeProps = {
  searchParams: FilterProps;
};

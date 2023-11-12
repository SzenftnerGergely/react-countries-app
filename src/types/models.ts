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
}

export type Theme = "light" | "dark"

export type ThemeContextProviderProps = {
    children: React.ReactNode
}

export type ThemeContextType = {
    theme: Theme,
    toggleTheme: () => void
} 

export type Currency = {
  name: string;
  symbol: string;
}

export type Country = {
  flags: {
      alt: string;
      svg: string;
  };
  name: {
      common: string;
  };
  population: number;
  region: string;
  capital: string;
  subregion: string;
  tld: string;
  currencies: {
      [currencyCode: string]: Currency;
  };
  languages: {
      [key: string]: string;
  };
  borders: string[]
};
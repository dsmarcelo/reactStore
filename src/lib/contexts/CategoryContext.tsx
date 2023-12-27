import { createContext, useContext, useState } from 'react';
import { ICategory } from '../../interfaces/category';
import React from 'react';

type CategoryContextProps = {
  categories: ICategory[];
  setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
};

export const CategoryContext = createContext<CategoryContextProps>({
  categories: [],
  setCategories: () => { },
});

type CategoryProviderProps = {
  children: React.ReactNode;
  initialCategories: ICategory[];
};

export const CategoryProvider: React.FC<CategoryProviderProps> = ({
  children,
  initialCategories,
}) => {
  const [categories, setCategories] = useState<ICategory[]>(initialCategories);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
export const useCategoryProvider = () => useContext(CategoryContext);

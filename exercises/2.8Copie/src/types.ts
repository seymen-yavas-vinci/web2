interface Pizza {
  id: number;
  title: string;
  content: string;
}
type NewPizza = Omit<Pizza, "id">;

interface Drink {
  title: string;
  image: string;
  volume: string;
  price: string;
}



export type { NewPizza };
export type { Pizza };
export type { Drink };
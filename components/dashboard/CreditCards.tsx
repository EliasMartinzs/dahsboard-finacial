import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CreditCard } from "./CreditCard";
import { auth } from "@/auth";
import { getCreditCard } from "@/data";

export async function CreditCards() {
  const user = await auth();
  const card = await getCreditCard(user?.user?.email ?? "");
  return (
    <Carousel className="max-lg:overflow-hidden">
      <CarouselContent>
        {card !== undefined ? (
          card.map((card) => (
            <CarouselItem key={card.id} className="basis-11/12">
              <CreditCard card={card} />
            </CarouselItem>
          ))
        ) : (
          <p>Nenhum catão de credito encontrado</p>
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

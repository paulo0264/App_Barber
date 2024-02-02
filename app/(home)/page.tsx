import { format } from "date-fns"
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";

export default function Home() {
  return (
    <div className="">
      <Header />

      <div className="p-5 pt-5">
        <h2 className="text-xl font-bold">OLá, Paulo</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale:ptBR
          })}
        </p>
      </div>
    </div>
  );
}

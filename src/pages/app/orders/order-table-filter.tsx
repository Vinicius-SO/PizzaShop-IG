import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFilter(){
    return(
       <>
            <form className="flex items-center gap-2">
                <span className="text-sm font-semibold">filtros:</span>
                <Input placeholder="ID do Pedido" className="h-8 w-[320px]"/>
                <Input placeholder="Nome do cliente" className="h-8 w-[320px]"/>
                <Select defaultValue="All">
                    <SelectTrigger className="h-8 w-[180px]">
                        <SelectValue/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All"> Todos</SelectItem>
                        <SelectItem value="pending"> Pendente</SelectItem>
                        <SelectItem value="Canceled"> Cancelado</SelectItem>
                        <SelectItem value="procesing"> Em preparo</SelectItem>
                        <SelectItem value="delevering"> Em entrega</SelectItem>
                        <SelectItem value="delevered"> Entregue</SelectItem>
                    </SelectContent>
                </Select>

                <Button type="submit" variant="secondary" size="xs">
                    <Search className="h-4 w-4 mr-2"/>
                    Filtrar resultados
                </Button>
                <Button type="submit" variant="outline" size="xs">
                    <X className="h-4 w-4 mr-2"/>
                    Remover Filtros
                </Button>
            </form>
       </>
   )
}
import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

export function OrderTableRow(){
    return(
       <>
            <TableRow >
                <TableCell>
                    <Button variant="outline" size="xs">
                        <Search className="h-3 w-3"/>
                        <span className="sr-only">Detalhes do pedido</span>
                    </Button>
                </TableCell>
                <TableCell className="font-mono text-xs font-medium">j12km32343546575kmnjndsds</TableCell>
                <TableCell className="text-muted-foreground">
                    Há 15 minutos
                </TableCell>
                <TableCell>
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                        <span className="font-medium text-muted-foreground">Pendente</span>
                    </div>
                </TableCell>
                <TableCell>Diego Schell Fernandes</TableCell>
                <TableCell className="font-medium">R$ 149,98</TableCell>
                <TableCell>
                    <Button variant="outline">
                        <ArrowRight className="h-3 w-3 mr-2"/>
                        Aprovar
                    </Button>
                </TableCell>
                <TableCell>
                    <Button variant="ghost">
                        <X className="h-3 w-3 mr-2"/>
                        Cancelar
                    </Button>
                </TableCell>
            </TableRow>
       </>
   )
}
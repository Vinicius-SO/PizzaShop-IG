import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
  }
   from "@/components/ui/table";
import { ArrowRight, ArrowRightToLine, Search, X } from "lucide-react";

export function Orders(){
    return(
       <>
            <div className="flex flex-col gap-4 over">
                <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
            </div>
            <div className="space-y-2.5">
                <form className="flex items-center gap-2">
                    <span className="text-sm font-semibold">filtros:</span>
                    <Input placeholder="Nome do cliente" className="h-8 w-[320px]"/>
                </form>

                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[64px]"></TableHead>
                                <TableHead className="w-[140px]">Identificador</TableHead>
                                <TableHead className="w-[180px]">Realizado</TableHead>
                                <TableHead className="w-[140px]">Status</TableHead>
                                <TableHead>Cliente</TableHead>
                                <TableHead className="w-[140px]">Total do pedido</TableHead>
                                <TableHead className="w-[164px]"></TableHead>
                                <TableHead className="w-[132px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array.from({length:10}).map(()=>{
                                return(
                                    <TableRow>
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
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>

            </div>
       </>
   )
}
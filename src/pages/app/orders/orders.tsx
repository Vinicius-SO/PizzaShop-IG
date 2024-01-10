import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
  }
   from "@/components/ui/table";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilter } from "./order-table-filter";

export function Orders(){
    return(
       <>
            <div className="flex flex-col gap-4 over">
                <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
            </div>
            <div className="space-y-2.5">
               <OrderTableFilter/>

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
                            {Array.from({length:10}).map((_,i)=>{
                                return(
                                    <OrderTableRow key={i}/>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>

            </div>
       </>
   )
}
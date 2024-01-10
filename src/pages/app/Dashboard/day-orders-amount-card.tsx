import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {  Utensils } from "lucide-react";

export function DayOrdersAmountCard(){
    return(
       <>
        <Card>
            <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">
                <CardTitle>Pedidos (dia)</CardTitle>
                <Utensils className="h-4 w-4 text-muted-foreground"/>
            </CardHeader>
            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tight">
                    12
                </span>
                <p className="text-xs text-muted-foreground">
                    <span className="text-rose-500 dark:text-rose-400">-2%</span> em relação ao mês passado
                </p>
            </CardContent>
        </Card>
       </>
   )
}
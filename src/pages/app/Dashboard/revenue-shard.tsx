import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Line,
    CartesianGrid,
 } from 'recharts'

 const data = [
    { date: '10/12', revenue: 1200 },
    { date: '11/12', revenue: 800 },
    { date: '12/12', revenue: 900 },
    { date: '13/12', revenue: 400 },
    { date: '14/12', revenue: 2300 },
    { date: '15/12', revenue: 800 },
    { date: '16/12', revenue: 640 },
  ]

export function RevenueShard(){
    return(
       <>
            <Card className="col-span-6">
                <CardHeader className="flex-row items-center justify-between pb-8">
                    <div className="space-y-1">
                        <CardTitle className="Text-base font-medium">
                            Receita no período
                        </CardTitle>
                        <CardDescription className="text-base font-medium">
                            Receita diaria no pedriodo
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={240} >
                        <LineChart data={data} style={{ fontSize: 12}}>
                            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
                            <YAxis
                            stroke="#888"
                            axisLine={false}
                            tickLine={false}
                            width={80}
                            tickFormatter={(value: number) =>
                                value.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                                })
                            }
                            />
                            <Line type="linear" strokeWidth={2} dataKey="revenue"/>
                            <CartesianGrid vertical={false} className="stroke-muted"/>
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
       </>
   )
}
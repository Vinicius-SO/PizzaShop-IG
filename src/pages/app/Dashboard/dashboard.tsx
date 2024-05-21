import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./month-revenue";
import { OrdersAmountCard } from "./orders-amount-card";
import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { CancelOrdersAmountCard } from "./cancel-orders-amount";
import { RevenueShard } from "./revenue-shard";
import { PopularProductsChart } from "./popular-products-chart";

export function Dashboard(){
    return (
        <>
            <Helmet title="Dashboard"/>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <div className="grid grid-cols-4 gap-4">
                    <MonthRevenueCard/>
                    <OrdersAmountCard/>
                    <DayOrdersAmountCard/>
                    <CancelOrdersAmountCard/>
                </div>

                <div className="grid grid-cols-9 gap-4">
                    <RevenueShard/>
                    <PopularProductsChart />

                </div>
            </div>
        </>
    )
}
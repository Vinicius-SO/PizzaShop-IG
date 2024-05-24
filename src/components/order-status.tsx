type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

//Refatorar os dois records para um order Status map <OrderStatus, { name: string, color: string}> assim temos um Record e só usamos orderStatusColorMap[status].name
//Exemplo pending: {name:'Pendente', color: 'bg-slate-400'}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
}

const orderStatusColorMap: Record<OrderStatus, string> = {
  pending: 'bg-slate-400',
  canceled: 'bg-rose-500',
  delivered: 'bg-emerald-500',
  delivering: 'bg-amber-500',
  processing: 'bg-amber-500',
}

//Função refatorada
export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${orderStatusColorMap[status]}`} />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}

//Antes da refatoração

// export function OrderStatus({ status }: OrderStatusProps) {
//   return (
//     <div className="flex items-center gap-2">
//       {status === 'pending' && (
//         <span className="h-2 w-2 rounded-full bg-slate-400" />
//       )}

//       {status === 'canceled' && (
//         <span className="h-2 w-2 rounded-full bg-rose-500" />
//       )}

//       {status === 'delivered' && (
//         <span className="h-2 w-2 rounded-full bg-emerald-500" />
//       )}

//       {['processing', 'delivering'].includes(status) && (
//         <span className="h-2 w-2 rounded-full bg-amber-500" />
//       )}

//       <span className="font-medium text-muted-foreground">
//         {orderStatusMap[status]}
//       </span>
//     </div>
//   )
// }
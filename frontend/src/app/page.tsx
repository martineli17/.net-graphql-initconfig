import { ClientDetailsToogle } from "@/components/client/details/client-details-toogle.component";
import { ClientBodyTable } from "@/components/client/list/client-body-table.component";
import { ClientHeaderTable } from "@/components/client/list/client-header-table.component";
import { ClientTable } from "@/components/client/list/client-table.component";
import { ClientPaymentsToogle } from "@/components/client/payments/client-payments-toogle.component";
import { ModalContextProvider } from "@/contexts/modal.context";

export default function Home() {
  return (
    <ModalContextProvider>
      <ClientTable>
        <ClientHeaderTable />
        <ClientBodyTable />
      </ClientTable>
      <ClientDetailsToogle />
      <ClientPaymentsToogle />
    </ModalContextProvider>
  )
}

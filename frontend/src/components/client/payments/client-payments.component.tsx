import { Modal } from "@/components/modal/modal.component";
import { ClientPaymentsFooterClose } from "./client-payments-footer-close.component";
import { ModalHeader } from "@/components/modal/modal-header.component";
import { ModalContent } from "@/components/modal/modal-content.component";
import { ModalFooter } from "@/components/modal/modal-footer.component";
import { ClientPaymentsModel } from "@/models/client.model";
import { ClientPaymentsList } from "./client-payments-list.component";

interface ClientPaymentsProps {
    clientPayments: ClientPaymentsModel[];
}

export const ClientPayments: React.FC<ClientPaymentsProps> = (props) => {
    return (
        <Modal>
            <ModalHeader>
                <h3 className="text-xl font-semibold text-gray-400 ">
                    Pagamentos
                </h3>
            </ModalHeader>
            <ModalContent >
                <ClientPaymentsList clientPayments={props.clientPayments} />
            </ModalContent>
            <ModalFooter>
                <ClientPaymentsFooterClose />
            </ModalFooter>
        </Modal>
    )
}
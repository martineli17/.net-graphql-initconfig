import { Modal } from "@/components/modal/modal.component";
import { ClientDetailsFooterClose } from "./client-details-footer-close.component";
import { ClientDetailsModel } from "@/models/client.model";
import { ModalHeader } from "@/components/modal/modal-header.component";
import { ModalContent } from "@/components/modal/modal-content.component";
import { ModalFooter } from "@/components/modal/modal-footer.component";

interface ClientDetailsProps {
    clientDetails: ClientDetailsModel;
}

export const ClientDetails: React.FC<ClientDetailsProps> = (props) => {
    return (
        <Modal>
            <ModalHeader>
                <h3 className="text-xl font-semibold text-gray-400 ">
                    Detalhes
                </h3>
            </ModalHeader>
            <ModalContent >
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png" alt={props.clientDetails?.name} />
                    <h5 className="mb-1 text-xl font-medium text-gray-400">{props.clientDetails?.name}</h5>
                    <span className="text-sm text-gray-400 ">{props.clientDetails?.email}</span>
                </div>
            </ModalContent>
            <ModalFooter>
                <ClientDetailsFooterClose />
            </ModalFooter>
        </Modal>
    )
}
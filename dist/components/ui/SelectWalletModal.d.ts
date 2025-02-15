import { FunctionComponent } from "react";
import { Wallet } from "../../types";
import { BaseModalProps } from "./BaseModal";
export interface SelectWalletModalProps extends BaseModalProps {
    wallets: Wallet[];
    selectWallet: (wallet: Wallet) => void;
    closeModal: () => void;
    isKeplrExtentionNotInstalled: boolean;
}
export declare const SelectWalletModal: FunctionComponent<SelectWalletModalProps>;
//# sourceMappingURL=SelectWalletModal.d.ts.map
import { LightningElement, api } from 'lwc';

export default class ClaimTileLwc extends LightningElement {
    @api claim;

    get policyIcon() {
        if (this.claim && this.claim.policyType) {
            const type = this.claim.policyType.toLowerCase();

            if (type === 'auto') return 'utility:truck';
            if (type === 'property') return 'utility:home';
            if (type === 'life') return 'utility:connected_apps';
        }

        return 'utility:help';
    }
}
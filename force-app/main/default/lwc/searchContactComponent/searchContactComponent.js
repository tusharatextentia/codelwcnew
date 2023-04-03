import { LightningElement, track } from 'lwc';
// import getContacts from '@salesforce/apex/ContactController.getContacts';
// import saveContact from '@salesforce/apex/ContactController.saveContact';
// import deleteContact from '@salesforce/apex/ContactController.deleteContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import { notifyRecordUpdateAvailable } from 'lightning/uiRecordApi';

export default class ContactSearch extends NavigationMixin(LightningElement) {
    @track contacts;
    @track noRecordsFound = false;
    
    handleSearch(event) {
        getContacts({ searchKey: event.target.value })
            .then(result => {
                this.contacts = result;
                
                //sets the noRecordsFound property to true if the list is empty
                this.noRecordsFound = this.contacts.length === 0;
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }
    
    handleMenuSelect(event) {
        const actionName = event.detail.value;
        const row = event.detail.context;
        switch (actionName) {
            case 'View':
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: row.Id,
                        objectApiName: 'Contact',
                        actionName: 'view'
                    }
                });
                break;
            case 'Edit':
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: row.Id,
                        objectApiName: 'Contact',
                        actionName: 'edit'
                    }
                });
                // Notify LDS that the record has changed
                notifyRecordUpdateAvailable([{recordId: row.Id}]);
                break;
            case 'Delete':
                deleteContact({ recordId: row.Id })
                    .then(() => {
                        this.dispatchEvent(
                            new ShowToastEvent({
                                title: 'Success',
                                message: 'Record deleted',
                                variant: 'success'
                            })
                        );
                        return refreshApex(this.contacts);
                    })
                    .catch(error => {
                        this.dispatchEvent(
                            new ShowToastEvent({
                                title: 'Error deleting record',
                                message: error.body.message,
                                variant: 'error'
                            })
                        );
                    });
                break;
            default:
        }
    }
    
    handleAddNew() {
        const recordInput = { apiName: "Contact" };
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Contact",
                actionName: "new"
            }
           /*  ,
            state: {
                nooverride: "1",
                defaultFieldValues: encodeDefaultFieldValues(recordInput)
            } */
        });
    }
}

/* function encodeDefaultFieldValues(defaultFieldValues) {
    return Object.keys(defaultFieldValues)
        .map(fieldApiName => {
            return `${fieldApiName}=${defaultFieldValues[fieldApiName]}`;
        })
        .join("&");
} */
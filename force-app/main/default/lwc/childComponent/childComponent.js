import { LightningElement , api} from 'lwc';

export default class ChildComponent extends LightningElement 
{
    @api itemName="Child Component" ;

    @api handleChangeValue()
    {
        this.itemName = "changed by button click on Parent Component";
    }
}
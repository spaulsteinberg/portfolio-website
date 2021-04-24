export default class PhotoAddress {
    constructor(id, address, additionalInfo = null){
        this.id = id;
        this.address = address;
        this.additionalInfo = additionalInfo;
    }
}
import PhotoAddress from "../PhotoAddress";
import PostContactRequest from "../PostContactRequest";

let model = null;
describe('model tests', () => {
    beforeEach(() => {
        model = null;
    })
    it('Photo address create with null additional info', () => {
        model = new PhotoAddress("my id", "1234.jpg");
        expect(model.additionalInfo).toBeNull();
    })
    it('Photo Address creates with additional info', () => {
        model = new PhotoAddress("my id", "1234.jpg", "Link in print here");
        expect(model.additionalInfo).toEqual("Link in print here");
    })
    it('Post Contact Request creates correctly', () => {
        model = new PostContactRequest("Sam", "Steinberg", "sampaul@gmail.com", "my feedback");
        expect(model.firstName).toBe("Sam");
        expect(model.lastName).toBe("Steinberg");
        expect(model.email).toBe("sampaul@gmail.com");
        expect(model.msg).toBe("my feedback");
    })
})
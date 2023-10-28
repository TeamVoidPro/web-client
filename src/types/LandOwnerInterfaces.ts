
interface UserPersonalDetails{
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    PhoneNo: string;
    NICNo: string;
    Address1: string;
    Address2: string;
    City: string;
    Province: string;
    IdentificationType: string;
    IdentificationFrontImage: File | null;
    IdentificationBackImage: string;
}




export type {UserPersonalDetails};
export class User {
    userName: string = '';
    password: string = '';
    token: string;
    dateExpireted: string;
}

export class SendHSMToCode7 {
    deUrlAPI: string;
    number: string;
    imageFilePath: string;
    codCampaign: string;
    codNameSpace: string;
    deComplementFields: string;
}

export class SendHSMToFlex {
    telephone: string;    
    codCampaign: string;
    chatSessionId: string;
    codNameSpace: string;
    deComplementFields: string;
}

export class SendHSMForWhatsAppDTO {
    deUrlAPI: string;
    number: string;
    imageFilePath: string;
    codCampaign: string;
    codNameSpace: string;
    deComplementFields: string;
    isProviderToFlex: boolean = false;
}

export class SendHSMForWhatsAppAux {
    deVar: string = '';
    hasVar: boolean = true;
}

export class Code7CryptoEntity {
    deCrypto: string = '';
    deDecrypt: string = '';
    isDecrypt: boolean = false;
}

export class ReturnDTO {
    public hasError: boolean;
    public messageList: string[];
    public objectResult: any;
}

export class ReturnToFlexApi {
    currentUsage: number;
    hashCodeId: string;
    id: string;
    parts: string;
    status: string;
    telephone: string;
    usageLimit: number;
}
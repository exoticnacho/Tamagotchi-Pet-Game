import { Buffer } from "buffer";
import { Client as ContractClient, Spec as ContractSpec, } from '@stellar/stellar-sdk/contract';
export * from '@stellar/stellar-sdk';
export * as contract from '@stellar/stellar-sdk/contract';
export * as rpc from '@stellar/stellar-sdk/rpc';
if (typeof window !== 'undefined') {
    //@ts-ignore Buffer exists
    window.Buffer = window.Buffer || Buffer;
}
export const networks = {
    testnet: {
        networkPassphrase: "Test SDF Network ; September 2015",
        contractId: "CA4RTRUHW2EFCUOMKC73NSVZITLKEBLGUP4V5BIPZMWOSMWBJLEIBANX",
    }
};
export class Client extends ContractClient {
    options;
    static async deploy(
    /** Options for initializing a Client as well as for calling a method, with extras specific to deploying. */
    options) {
        return ContractClient.deploy(null, options);
    }
    constructor(options) {
        super(new ContractSpec(["AAAAAQAAAAAAAAAAAAAAA1BldAAAAAAJAAAAAAAAAAliaXJ0aGRhdGUAAAAAAAAGAAAAAAAAAAZlbmVyZ3kAAAAAAAQAAAAAAAAACWhhcHBpbmVzcwAAAAAAAAQAAAAAAAAAC2hhc19nbGFzc2VzAAAAAAEAAAAAAAAABmh1bmdlcgAAAAAABAAAAAAAAAAIaXNfYWxpdmUAAAABAAAAAAAAAAxsYXN0X3VwZGF0ZWQAAAAGAAAAAAAAAARuYW1lAAAAEAAAAAAAAAAFb3duZXIAAAAAAAAT",
            "AAAAAgAAAAAAAAAAAAAAB0RhdGFLZXkAAAAAAgAAAAEAAAAAAAAAA1BldAAAAAABAAAAEwAAAAEAAAAAAAAABUNvaW5zAAAAAAAAAQAAABM=",
            "AAAAAAAAAAAAAAAGY3JlYXRlAAAAAAACAAAAAAAAAAVvd25lcgAAAAAAABMAAAAAAAAABG5hbWUAAAAQAAAAAQAAB9AAAAADUGV0AA==",
            "AAAAAAAAAAAAAAAEZmVlZAAAAAEAAAAAAAAABW93bmVyAAAAAAAAEwAAAAA=",
            "AAAAAAAAAAAAAAAEcGxheQAAAAEAAAAAAAAABW93bmVyAAAAAAAAEwAAAAA=",
            "AAAAAAAAAAAAAAAFc2xlZXAAAAAAAAABAAAAAAAAAAVvd25lcgAAAAAAABMAAAAA",
            "AAAAAAAAAAAAAAAEd29yawAAAAEAAAAAAAAABW93bmVyAAAAAAAAEwAAAAA=",
            "AAAAAAAAAAAAAAAMbWludF9nbGFzc2VzAAAAAQAAAAAAAAAFb3duZXIAAAAAAAATAAAAAA==",
            "AAAAAAAAAAAAAAAHZ2V0X3BldAAAAAABAAAAAAAAAAVvd25lcgAAAAAAABMAAAABAAAH0AAAAANQZXQA",
            "AAAAAAAAAAAAAAAJZ2V0X2NvaW5zAAAAAAAAAQAAAAAAAAAFb3duZXIAAAAAAAATAAAAAQAAAAs="]), options);
        this.options = options;
    }
    fromJSON = {
        create: (this.txFromJSON),
        feed: (this.txFromJSON),
        play: (this.txFromJSON),
        sleep: (this.txFromJSON),
        work: (this.txFromJSON),
        mint_glasses: (this.txFromJSON),
        get_pet: (this.txFromJSON),
        get_coins: (this.txFromJSON)
    };
}

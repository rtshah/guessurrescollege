/// <reference types="node" />
/// <reference types="node" />
import { SecureServerOptions } from 'http2';
export interface KeyCertPair {
    private_key: Buffer;
    cert_chain: Buffer;
}
export declare abstract class ServerCredentials {
    abstract _isSecure(): boolean;
    abstract _getSettings(): SecureServerOptions | null;
    abstract _equals(other: ServerCredentials): boolean;
    static createInsecure(): ServerCredentials;
    static createSsl(rootCerts: Buffer | null, keyCertPairs: KeyCertPair[], checkClientCertificate?: boolean): ServerCredentials;
}

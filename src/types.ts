export interface ActionRecord{agentId:string;action:string;hash:string;previousHash:string;timestamp:number;success:boolean;}
export interface ReputationScore{agentId:string;totalActions:number;successRate:number;trustLevel:"high"|"medium"|"low";}
export interface ProvenanceChain{agentId:string;actions:ActionRecord[];verified:boolean;}
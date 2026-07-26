# agent-provenance-ts

SHA-chain provenance + reputation scoring for AI agents.

```typescript
import { ProvenanceTracker } from "agent-provenance-ts";
const pt = new ProvenanceTracker();
pt.record("agent-a", "search", true);
pt.reputation("agent-a"); // { trustLevel: "high", successRate: 1 }
pt.verify("agent-a");      // true — chain integrity verified
```

MIT

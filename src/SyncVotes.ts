import * as program from "commander";

import ConfigLoader from "./ConfigLoader";

class SyncVotes {
    exec (program: program.Command) {
        const config = ConfigLoader.loadConfig(program);
        console.log("sync-votes not yet supported");
        console.log(config);
    }
}

export default SyncVotes;
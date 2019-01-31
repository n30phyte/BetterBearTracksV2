"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const sqlite = __importStar(require("sqlite3"));
class DatabaseHelper {
    constructor() {
        this.database = new sqlite.Database("../Beartracks.db");
    }
    bootstrap() {
        let sql = fs.readFileSync("../createDatabase.sql").toString();
        this.database.run(sql);
    }
    insert(sql, target) {
        this.database.run(sql, (err) => {
            // console.log("tried to fetch " + target);
            // throw err;
        });
    }
    printDatabase(tableName) {
        let sql = "SELECT * FROM " + tableName;
        this.database.all(sql, [], (err, rows) => {
            if (err) {
                // console.log("tried to fetch " + tableName);
                // throw err;
            }
            rows.forEach((row) => {
                console.log(row);
            });
        });
    }
}
exports.DatabaseHelper = DatabaseHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJhcHAvc3JjL0RhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDQUF5QjtBQUN6QixnREFBa0M7QUFFbEMsTUFBYSxjQUFjO0lBR3ZCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sU0FBUztRQUNaLElBQUksR0FBRyxHQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQVcsRUFBRSxNQUFjO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFFO1lBQzFCLDJDQUEyQztZQUMzQyxhQUFhO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGFBQWEsQ0FBQyxTQUFpQjtRQUNsQyxJQUFJLEdBQUcsR0FBRyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNyQyxJQUFJLEdBQUcsRUFBRTtnQkFDTCw4Q0FBOEM7Z0JBQzlDLGFBQWE7YUFDaEI7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQS9CRCx3Q0ErQkMifQ==
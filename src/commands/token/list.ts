import { Command, flags } from "@coralproject/coral-cli-command";
import TtyTable from "tty-table";

export const ListTokenQuery = /* GraphQL */ `
  query ListTokenQuery {
    viewer {
      tokens {
        id
        name
        createdAt
      }
    }
  }
`;

export default class TokenList extends Command {
  public static description = "lists tokens on the current user";

  public static flags = {
    domain: flags.domain({ required: true }),
    json: flags.boolean({ description: "will write output as json" }),
  };

  public async run() {
    const {
      flags: { domain, json },
    } = this.parse(TokenList);

    const {
      data: { viewer },
    } = await this.coral(domain).graphql(ListTokenQuery);

    if (json) {
      this.log(JSON.stringify(viewer.tokens, null, 2));
    } else {
      const header = [
        { value: "id", alias: "ID", align: "left" },
        { value: "name", alias: "Name", align: "left" },
        { value: "createdAt", alias: "Created At", align: "left" },
      ];

      const rows = viewer.tokens.map(
        (token: { id: string; name: string; createdAt: string }) => [
          token.id,
          token.name,
          token.createdAt,
        ],
      );

      const table = TtyTable(header, rows);
      this.log(table.render());
    }
  }
}

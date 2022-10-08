// Source: https://gist.github.com/matepaiva/de1c8c6a1d827c462b4e17e2839fbc83

import mjml from "mjml";
import { readFile, writeFile } from "fs";
import glob from "glob";
import { promisify } from "util";

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
const globAsync = promisify(glob);

const main = async () => {
  const filePaths = await globAsync("nhost/emails/**/*.mjml");

  const htmlFiles = await Promise.all(
    filePaths.map(async (path) => {
      try {
        return {
          path,
          content: await readFileAsync(path, "utf8").then(
            (content) => mjml(content).html
          ),
        };
      } catch (error) {
        console.error(`Error parsing file: ${path}: ${error}`);
        return { path, content: undefined };
      }
    })
  );

  const result = await Promise.all(
    htmlFiles
      .filter(({ content }) => content)
      .map(async ({ path, content }) => {
        const htmlPath = path.replace(".mjml", ".html");

        await writeFileAsync(htmlPath, content, "utf8");
      })
  );

  console.log(
    `- ${result.length} of ${filePaths.length} file(s) parsed with success.`
  );
  console.log(
    `- ${htmlFiles.filter(({ content }) => !content).length} of ${
      filePaths.length
    } file(s) could not be parsed.`
  );
};

main();

# localcoder

`localcoder` is a small npm wrapper for the LocalCoder install script.

## Usage

Run:

```bash
npx localcoder
```

This command executes:

```bash
curl -fsSL https://raw.githubusercontent.com/iamwjun/localcoder/main/install.sh | bash
```

## What It Does

When `npx localcoder` runs, the package entry script in [bin/cli.js](/Users/wujun/Github/slotjs/localcoder/bin/cli.js) starts a shell and forwards execution to the remote installer hosted in this repository.

## Local Development

To test the CLI entry locally:

```bash
node ./bin/cli.js
```

Or make the file executable and run it directly:

```bash
./bin/cli.js
```

## Notes

- `curl` and `bash` must be available in the target environment.
- The installer script is fetched from GitHub at runtime.
- Review `install.sh` before running it in environments with stricter security requirements.

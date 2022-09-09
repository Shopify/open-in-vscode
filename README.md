# Quick Open in VSCode

When participating in code reviews, scrolling through comments and then switching to VSCode to open each comment in the editor can become a cumbersome
and repetitive task. Developers then have to also repeat this task again in other instances such as when reading through documentations which refers to
certain files or when looking for CI failures in BuildKite. To automate this task, Open in VSCode can open file path links directly in VSCode.


## Features

_File path links must be formatted to originate in the root directory of the repo_

- Right click file path links in GitHub and open them in VSCode
- Highlight file path links anywhere and open them in VSCode
- Open all failing ruby tests at once from BuildKite CI by right clicking the `test_data.json` file located under the artifacts tab of a ruby test suite
  in BuildKite

## Setup

_NOTE: This chrome extension is not available yet on the Chrome Web Store_

1. Download and pin the Open in VSCode chrome extension. Right click the chrome extension and open the "Options" page.
2. For the base path, enter the path to where all your local repositories are located. This should generally be in the format of
   `/Users/{local_user_name}/src/github.com/Shopify`. For example, my base path was `/Users/sayyant/src/github.com/Shopify`
3. _NOTE: Remote development with Spin is not supported yet_ If using Spin, then enter in information related to spin development in the remote
   development field
4. Save settings and exit the "Options" page. You should be good to go!

_If developing with Spin, the extension will not work with local repositories. If you would like to access a local repo, then remove the remote
development information_

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Shopify/open-in-vscode. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor code of conduct](./CODE_OF_CONDUCT.md). See the [contributing guidelines](./CONTRIBUTING.md) for more details.

## Limitations + Future work

Due to the time constraint of having developed in this my final few days as a Shopify intern, several assumptions were made based on how my team
(Production Excellence) handles CI. I assumed that the repo is located in the BuildKite CI Result's URL as `https://buildkite.com/{owner}/{repo}/...`
andthat Ruby tests in BuildKite produce a `test_data.json` artifact file. These assumptions may not hold true for other instances + teams and so,
coming up with a way to allow for as many people as possible to leverage the most out of this tool would be awesome for the future!

### Future Features to Create:

- Compatability with Spin repos (I honestly think the code is there to support this but I do not know how directories work with Spin)
- Ability to highlight GitHub line numbers and open specific lines in VSCode
- Ability to open file path links across Github branches to allow for a more seamless code review process
- Remove the browser alert asking to open a link in VSCode
- Find more ways to open multiple tests at once

## Final thoughts

Even though it's not a very flashy chrome extension that atomically reduces lost development time, the time savings add up over time. I believe that
there is a good amount of potential to streamline development at Shopify so I would love to see this extension taken the next level in the future!

---

Created by: [Sayyant Rath](https://github.com/SayyantRath)
Inspo: https://github.com/aberonni/open-in-vscode

### Our main Branch is MAIN not MASTER
- Check branch name first before pushing by: git branch -a.
- add files to git: git add . OR git add <file-name>
- commit files: git commit -m "message"
- push: git push origin main
- show origin: git show origin
- pull: git pull origin main
- status: git status

# WHAT PRACTICES TO FOLLOW WHILE DEVELOPING THE PROJECT
- Never work or push directly in MAIN 
- while adding a new feature, create a new branch (name it according to the naming conventions given below) and
  take a pull from the MAIN int hat branch.
- 


# COMMIT NAMING CONVENTIONS
Format: <type>(<scope>): <subject>

Examples:
feat: (new feature for the user, not a new feature for build script)
fix: (bug fix for the user, not a fix to a build script)
docs: (changes to the documentation)
style: (formatting, missing semi colons, etc; no production code change)
refactor: (refactoring production code, eg. renaming a variable)
test: (adding missing tests, refactoring tests; no production code change)
chore: (updating grunt tasks etc; no production code change)

# BRANCH NAMING CONVENTIONS
Use a clear and consistent naming convention for your branches helps team members quickly identify the purpose of each branch. Popular naming conventions often include prefixes like “feature/”, “bugfix/”, or “release/” to indicate the branch’s purpose, followed by a descriptive name or issue number.

Examples:
git checkout -b feature/login-ui
git checkout -b bugfix/issue-123
git checkout -b release/v1.2.0
